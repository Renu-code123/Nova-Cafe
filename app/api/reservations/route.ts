import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validations/schemas";
import { db } from "@/lib/storage/db";

export async function GET() {
  try {
    const reservations = await db.getReservations();
    return NextResponse.json({
      success: true,
      data: reservations,
    });
  } catch (error) {
    console.error("Error fetching reservations:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch reservations." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = reservationSchema.parse(body);

    const reservation = await db.createReservation(validatedData);

    return NextResponse.json({
      success: true,
      message: "Table reservation confirmed successfully.",
      data: reservation,
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

    console.error("Reservation booking error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong while securing your table. Please try again." },
      { status: 500 }
    );
  }
}
