import type { Product } from "../../types/product";
type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;

  return (
    <article className="group flex h-full min-w-0 flex-col">
      <div className="aspect-[3/4] overflow-hidden bg-stone-200">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 items-start justify-between gap-3 py-4">
        <h2 className="text-sm font-semibold text-stone-900">{name}</h2>
        <span className="shrink-0 text-sm tabular-nums text-stone-500">
          {price}$
        </span>
      </div>
      <button
        type="button"
        aria-label={`Add ${name} to cart`}
        className="min-h-11 w-full cursor-pointer border border-stone-900 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-900 transition-colors duration-200 hover:bg-stone-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900 active:bg-stone-800 active:text-white motion-reduce:transition-none"
      >
        Add to cart
      </button>
    </article>
  );
};

export default ProductCard;
