import { NextResponse } from "next/server";
import { MENU_ITEMS } from "@/lib/data/menu-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q")?.toLowerCase();

  let items = [...MENU_ITEMS];

  if (category && category !== "all") {
    items = items.filter((item) => item.category === category);
  }

  if (query) {
    items = items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tastingNotes?.some((t) => t.toLowerCase().includes(query)) ||
        item.dietaryTags.some((d) => d.toLowerCase().includes(query))
    );
  }

  return NextResponse.json({
    success: true,
    count: items.length,
    data: items,
  });
}
