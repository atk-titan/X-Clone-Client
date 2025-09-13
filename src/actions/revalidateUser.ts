"use server";

import { revalidateTag } from "next/cache";

export async function revalidateUserProfile(id: string) {
  revalidateTag(`user-${id}`);
}