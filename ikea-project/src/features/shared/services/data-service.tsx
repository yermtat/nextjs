export async function getData(): Promise<Product[]> {
  try {
    const response = await fetch(`${process.env.API_HOST}/api/products`);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching:", error);
    return [];
  }
}
