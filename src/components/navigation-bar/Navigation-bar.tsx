import { Outlet, Link, NavLink } from "react-router";
import logo from "../../assets/forme-logo.png";

const Navigation = () => {
  return (
    <>
      <header className="border-b border-neutral-200 bg-white">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-6 sm:px-8"
        >
          <Link
            to="/"
            aria-label="FORME home"
            className="shrink-0 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <img src={logo} alt="FORME" className="block h-auto w-32 sm:w-40" />
          </Link>

          <div className="flex items-center gap-6 sm:gap-8">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `inline-flex min-h-11 items-center border-b-2 px-1 text-xs font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-neutral-600 hover:border-black hover:text-black"
                }`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                `inline-flex min-h-11 items-center border-b-2 px-1 text-xs font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-neutral-600 hover:border-black hover:text-black"
                }`
              }
            >
              Sign in
            </NavLink>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
