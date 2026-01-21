import { NextResponse } from "next/server";
import { getQuotations } from "@/lib/quotation-storage";

export async function GET() {
  try {
    const quotations = await getQuotations();
    return NextResponse.json(quotations);
  } catch (error) {
    console.error("Get quotations error:", error);
    return NextResponse.json([], { status: 200 });
  }
}
