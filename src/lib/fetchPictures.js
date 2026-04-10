export async function fetchPictures(limit = 100) {
  try {
    const res = await fetch(`https://picsum.photos/v2/list?limit=${limit}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch pictures: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching pictures:", error);
    return []; // Return empty array on error
  }
}