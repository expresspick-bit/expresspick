
import type { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  return [
    {
      id: "1",
      supermarketId: "market-square",

      name: "Golden Morn",

      description: "Healthy cereal",

      category: "Groceries",

      price: 2500,

      stock: 50,

      imageUrl: "",

      isAvailable: true,

      createdAt: "",

      updatedAt: "",
    },

    {
      id: "2",
      supermarketId: "market-square",

      name: "Peak Milk",

      description: "Powdered milk",

      category: "Dairy",

      price: 1800,

      stock: 30,

      imageUrl: "",

      isAvailable: true,

      createdAt: "",

      updatedAt: "",
    },
  ];
}