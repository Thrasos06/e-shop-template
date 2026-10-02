import {
  signInWithGoogle,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/Sign-up-form.component";
import SignInForm from "../../components/sing-in-form/Sign-in-form.component";

const handleGoogleSignIn = async () => {
  const user = await signInWithGoogle();

  if (user) {
    await createUserDocumentFromAuth(user);
  }
};

const AuthenticationPage = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-white">
      <div className="mx-auto grid w-full max-w-5xl gap-16 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Sign In */}
        <section className="w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
              Welcome back
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Sign in to continue to your account.
            </p>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="
              flex w-full items-center justify-center gap-3
              rounded-lg border border-slate-200
              bg-white px-5 py-3.5
              text-sm font-semibold text-slate-800
              transition-all duration-200
              hover:border-slate-300
              hover:bg-slate-50
              focus:outline-none
              focus:ring-2
              focus:ring-slate-950
              focus:ring-offset-2
              active:scale-[0.99]
            "
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M21.35 12.18c0-.64-.06-1.25-.16-1.84H12v3.48h5.25a4.49 4.49 0 0 1-1.95 2.94v2.26h3.16c1.85-1.7 2.89-4.21 2.89-6.84Z"
              />
              <path
                fill="#34A853"
                d="M12 21.72c2.64 0 4.86-.88 6.48-2.38l-3.16-2.45c-.88.59-2 .94-3.32.94-2.55 0-4.71-1.72-5.48-4.04H3.26v2.52A9.79 9.79 0 0 0 12 21.72Z"
              />
              <path
                fill="#FBBC05"
                d="M6.52 13.79A5.9 5.9 0 0 1 6.21 12c0-.62.11-1.22.31-1.79V7.69H3.26A9.72 9.72 0 0 0 2.21 12c0 1.56.37 3.04 1.05 4.31l3.26-2.52Z"
              />
              <path
                fill="#EA4335"
                d="M12 6.17c1.44 0 2.73.5 3.75 1.47l2.81-2.81A9.44 9.44 0 0 0 12 2.28a9.79 9.79 0 0 0-8.74 5.41l3.26 2.52C7.29 7.89 9.45 6.17 12 6.17Z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="text-xs uppercase tracking-wider text-slate-400">
              or
            </span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <SignInForm />
        </section>

        {/* Sign Up */}
        <section className="border-t border-slate-200 pt-10 md:border-l md:border-t-0 md:pl-16 md:pt-0">
          <SignUpForm />
        </section>
      </div>
    </main>
  );
};

export default AuthenticationPage;
