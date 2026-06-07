/**
 * Renders a JSON-LD structured-data block. Use only in Server Components.
 * Google reads the raw <script>, so this never hydrates on the client.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject here (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
