export const ROLES = {
    STORE_KEEPER: "store_keeper",
    MANAGER: "manager",
  };
  
  export const rolePermissions = {
    store_keeper: [
      "/products",
      "/add-product",
    ],
    manager: [
      "/dashboard",
      "/products",
      "/add-product",
    ],
  };