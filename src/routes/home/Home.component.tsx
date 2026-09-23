import CategoryList from "../../components/category-list/Category-list.components";

import categories from "../../data/categories.json";

const Home = () => {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            Explore
          </span>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Shop by Category
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm text-stone-500">
            Discover our latest collections and find your style.
          </p>
        </div>

        <CategoryList categories={categories} />
      </section>
    </main>
  );
};

export default Home;
