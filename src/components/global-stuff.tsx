import { getOptionsPage } from "@nextwp/core";

export async function GlobalStuff() {
  const adamsoptionsPage = await getOptionsPage({ slug: "site-globals" });
  return (
    <div>
      <pre>{JSON.stringify(adamsoptionsPage, null, 2)}</pre>
    </div>
  );
}
