export function extractIdFromSlug(slugOrId: string): number | null {
  // contoh: sneakers-court-minimalis-27 -> 27
  const last = slugOrId.split('-').pop();
  const id = Number(last);
  return Number.isFinite(id) ? id : null;
}
