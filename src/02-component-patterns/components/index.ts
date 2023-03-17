import { ProductCards as ProductCardsHOC } from "./ProductCards";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/productInterfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


export const ProductCards: ProductCardHOCProps = Object.assign(ProductCardsHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export default ProductCards;