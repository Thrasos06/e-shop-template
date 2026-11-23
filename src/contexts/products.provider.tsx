import { useState, type ReactNode } from "react";
import { ProductsContext } from "./products.context";
import type { Product } from "../types/product";
import PRODUCTS from "../shop-data.json";

export const ProductsProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [products] = useState<Product[]>(PRODUCTS);
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};