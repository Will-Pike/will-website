import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { getQuotations, updateQuotations } from "@/lib/quotation-storage";
import type { Quotation } from "@/types/quotation";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isValid = await validateSession();
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const index = parseInt(id, 10);
    const quotations = await getQuotations();

    if (isNaN(index) || index < 0 || index >= quotations.length) {
      return NextResponse.json(
        { error: "Invalid quotation ID" },
        { status: 400 }
      );
    }

    const updatedQuotation: Quotation = await req.json();

    if (!updatedQuotation.text || !updatedQuotation.attribution) {
      return NextResponse.json(
        { error: "Text and attribution are required" },
        { status: 400 }
      );
    }

    const updatedQuotations = [...quotations];
    updatedQuotations[index] = updatedQuotation;
    await updateQuotations(updatedQuotations);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update quotation error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to update quotation: ${message}` },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isValid = await validateSession();
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const index = parseInt(id, 10);
    const quotations = await getQuotations();

    if (isNaN(index) || index < 0 || index >= quotations.length) {
      return NextResponse.json(
        { error: "Invalid quotation ID" },
        { status: 400 }
      );
    }

    const updatedQuotations = quotations.filter((_, i) => i !== index);
    await updateQuotations(updatedQuotations);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete quotation error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to delete quotation: ${message}` },
      { status: 500 }
    );
  }
}
