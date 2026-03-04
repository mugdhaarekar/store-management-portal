const STORAGE_KEY = "products";

const defaultProducts = Array.from({ length: 10 }, (_, index) => ({
  id: Date.now() + index,
  name: `Product Name ${index + 1}`,
  views: `${(index + 1) * 1000}`,
  price: `$${(index + 1) * 100}`,
  revenue: `$${(index + 1) * 1000}`,
}));

export const getProducts = () => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
    return defaultProducts;
  }

  return JSON.parse(saved);
};

export const saveProducts = (products) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const updateProduct = (id, updated) => {
  const products = getProducts();

  const updatedProducts = products.map((p) =>
    p.id === id ? { ...p, ...updated } : p
  );

  saveProducts(updatedProducts);

  return updatedProducts;
};

export const deleteProduct = (id) => {
  const products = getProducts();

  const updatedProducts = products.filter((p) => p.id !== id);

  saveProducts(updatedProducts);

  return updatedProducts;
};

export const addProduct = (product) => {
  const products = getProducts();

  const updatedProducts = [...products, product];

  saveProducts(updatedProducts);

  return updatedProducts;
};