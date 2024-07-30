async function genarateItems() {
  try {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return data;    
  } catch (error) {
    console.log("Genatare Items Error : ", error);
  }

}
async function genarateOneItem(id) {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );
  return data;
}

export { genarateItems, genarateOneItem };
