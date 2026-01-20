import {
  getExperiencesFromBlob,
  saveExperiencesToBlob,
} from "./blob-storage";
import { gradyProfile } from "@/data/grady-profile";
import type { Experience } from "@/types/experience";

export async function getExperiences(): Promise<Experience[]> {
  // Try to get from blob storage
  const experiences = await getExperiencesFromBlob();

  if (experiences !== null) {
    return experiences;
  }

  // Blob doesn't exist yet, seed from static data
  await saveExperiencesToBlob(gradyProfile.experience);
  return gradyProfile.experience;
}

export async function updateExperiences(
  experiences: Experience[]
): Promise<void> {
  await saveExperiencesToBlob(experiences);
}
