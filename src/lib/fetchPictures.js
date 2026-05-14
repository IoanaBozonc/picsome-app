export async function fetchPictures() {
  try {
    //  20 de produse de haine
    // 'fashion,clothing,outfit' pentru poze faine
    const fashionData = Array.from({ length: 20 }, (_, i) => ({
      id: i + 200,
      download_url: `https://loremflickr.com/800/1000/fashion,clothing,outfit?lock=${i}`,
      title: `Articol Fashion #${i + 1}`
    }));

    return fashionData;
  } catch (error) {
    console.error("Error generating fashion pictures:", error);
    return [];
  }
}