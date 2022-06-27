export function convertToSearchParams (payload: Record<string, string | number>): string {
  const payloadWithoutEmpty = Object.entries(payload)
    .reduce((acc, [k, v]) => v || typeof v === 'boolean' ? { ...acc, [k]: v } : acc, {})
  return new URLSearchParams(payloadWithoutEmpty).toString()
}


