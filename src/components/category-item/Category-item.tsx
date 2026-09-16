import type { Category } from "../../types/categories";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { title, imageUrl } = category;
  return (
    <div className="group relative h-[420px] cursor-pointer overflow-hidden bg-stone-200">
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h2 className="text-2xl font-semibold uppercase tracking-wide">
          {title}
        </h2>

        <span className="mt-3 inline-block border-b border-white pb-1 text-xs font-semibold tracking-[0.2em] transition-all duration-300 group-hover:tracking-[0.3em]">
          SHOP NOW
        </span>
      </div>
    </div>
  );
};

export default CategoryItem;
