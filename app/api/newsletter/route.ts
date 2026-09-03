import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations/schemas";
import { db } from "@/lib/storage/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    const result = await db.addNewsletterSubscriber(validatedData.email);

    return NextResponse.json(result);
  } catch (error: any) {
    if (error?.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process subscription. Please try again." },
      { status: 500 }
    );
  }
}
