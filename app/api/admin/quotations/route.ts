import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { getQuotations, updateQuotations } from "@/lib/quotation-storage";
import type { Quotation } from "@/types/quotation";

export async function GET() {
  try {
    const isValid = await validateSession();
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const quotations = await getQuotations();
    const quotationsWithIds = quotations.map((q, index) => ({
      ...q,
      id: index,
    }));

    return NextResponse.json(quotationsWithIds);
  } catch (error) {
    console.error("Get quotations error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to fetch quotations: ${message}` },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const isValid = await validateSession();
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const newQuotation: Quotation = await req.json();

    if (!newQuotation.text || !newQuotation.attribution) {
      return NextResponse.json(
        { error: "Text and attribution are required" },
        { status: 400 }
      );
    }

    const quotations = await getQuotations();
    const updatedQuotations = [newQuotation, ...quotations];
    await updateQuotations(updatedQuotations);

    return NextResponse.json({ success: true, id: 0 });
  } catch (error) {
    console.error("Add quotation error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to add quotation: ${message}` },
      { status: 500 }
    );
  }
}
