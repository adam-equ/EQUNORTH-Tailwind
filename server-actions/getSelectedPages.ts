const getSelectedPages = async ({ include }: { include: string[] }) => {
  try {
    if (!include || !Array.isArray(include)) {
      throw new Error("Invalid include parameter");
    }
    const url = `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/pages/by-id`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_ids: include,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pages:", error);
    throw error;
  }
};
export default getSelectedPages;
