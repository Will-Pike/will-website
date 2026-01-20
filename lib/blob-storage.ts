import { put } from "@vercel/blob";
import type { Experience } from "@/types/experience";

const EXPERIENCES_BLOB_PATH = "profile/experiences.json";

// In-memory cache with TTL
let experiencesCache: { data: Experience[]; timestamp: number } | null = null;
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

function getBlobUrl(): string {
  const baseUrl = process.env.BLOB_READ_WRITE_TOKEN
    ? `https://${process.env.VERCEL_BLOB_STORE_ID}.public.blob.vercel-storage.com`
    : "";
  return `${baseUrl}/${EXPERIENCES_BLOB_PATH}`;
}

export async function getExperiencesFromBlob(): Promise<Experience[] | null> {
  // Check cache first
  if (
    experiencesCache &&
    Date.now() - experiencesCache.timestamp < CACHE_TTL_MS
  ) {
    return experiencesCache.data;
  }

  try {
    const blobUrl = getBlobUrl();
    const response = await fetch(blobUrl, { cache: "no-store" });

    if (!response.ok) {
      // Blob doesn't exist yet
      return null;
    }

    const experiences = (await response.json()) as Experience[];

    // Update cache
    experiencesCache = { data: experiences, timestamp: Date.now() };

    return experiences;
  } catch (error) {
    console.error("Failed to read experiences from blob:", error);
    return null;
  }
}

export async function saveExperiencesToBlob(
  experiences: Experience[]
): Promise<void> {
  await put(EXPERIENCES_BLOB_PATH, JSON.stringify(experiences, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  });

  // Invalidate cache
  experiencesCache = null;
}

export async function experiencesBlobExists(): Promise<boolean> {
  try {
    const blobUrl = getBlobUrl();
    const response = await fetch(blobUrl, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

export function invalidateExperiencesCache(): void {
  experiencesCache = null;
}
