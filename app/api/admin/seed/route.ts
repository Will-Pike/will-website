import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { gradyProfile } from "@/data/grady-profile";
import { saveExperiencesToBlob, experiencesBlobExists } from "@/lib/blob-storage";

export async function POST() {
  try {
    const isAuthenticated = await validateSession();
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const exists = await experiencesBlobExists();
    if (exists) {
      return NextResponse.json({
        message: "Blob already exists. Use force=true to overwrite.",
        seeded: false,
      });
    }

    const url = await saveExperiencesToBlob(gradyProfile.experience);

    return NextResponse.json({
      message: "Successfully seeded experiences to blob storage",
      url,
      count: gradyProfile.experience.length,
      seeded: true,
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed blob storage" },
      { status: 500 }
    );
  }
}

export async function PUT() {
  try {
    const isAuthenticated = await validateSession();
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Force overwrite
    const url = await saveExperiencesToBlob(gradyProfile.experience);

    return NextResponse.json({
      message: "Successfully seeded experiences to blob storage (overwrite)",
      url,
      count: gradyProfile.experience.length,
      seeded: true,
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed blob storage" },
      { status: 500 }
    );
  }
}
