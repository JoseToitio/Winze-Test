export const wineApi = async () => {
  const result = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=10')
  .then((r) => r.json());
  return result;
}