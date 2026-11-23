import { createContext } from "react";
import type { Product } from "../types/product";

type ProductsContextValue = {
    products: Product[];
};

export const ProductsContext = createContext<ProductsContextValue>({
    products: [],
});