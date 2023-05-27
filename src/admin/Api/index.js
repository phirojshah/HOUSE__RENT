
export const getInventory = () => {
  return fetch("http://localhost:5000/api/product/get-product")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching inventory:", error);
    });
};

