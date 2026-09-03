import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/schemas";
import { db } from "@/lib/storage/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const message = await db.createContactMessage(validatedData);

    return NextResponse.json({
      success: true,
      message: "Message received. We'll get back to you shortly.",
      data: message,
    });
  } catch (error: any) {
    if (error?.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error",
          details: error.errors.map((e: any) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    console.error("Contact message error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
