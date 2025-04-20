// export interface Pizza {
//     id: number
//     category: string
//     name: string
//     price: number
//     image: string
//     description: string
//   }

export async function getPizzas(): Promise<Pizza[]> {
  try {
    const response = await fetch(`${process.env.API_HOST}/api/pizzas`);

    if (!response.ok) {
      throw new Error(`Failed to fetch pizzas: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    return [];
  }
}
