import { useState } from "react";

import FormInput from "../form-input/Form-input";

import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail || !password) {
      alert("Please enter your email and password");
      return;
    }

    const user = await signInAuthUserWithEmailAndPassword(cleanEmail, password);

    if (!user) {
      alert("Invalid email or password");
      return;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
          Sign in
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Sign in with your email and password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <FormInput
          label="Email"
          type="email"
          required
          autoComplete="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="you@example.com"
        />

        <FormInput
          label="Password"
          type="password"
          required
          minLength={8}
          autoComplete="current-password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="
            mt-2 w-full
            rounded-lg
            bg-slate-950
            px-5 py-3.5
            text-sm font-semibold text-white
            transition-all duration-200
            hover:bg-slate-800
            focus:outline-none
            focus:ring-2
            focus:ring-slate-950
            focus:ring-offset-2
            active:scale-[0.99]
          "
        >
          Sign in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <a
          href="/sign-up"
          className="font-medium text-slate-950 hover:underline"
        >
          Create one
        </a>
      </p>
    </div>
  );
};

export default SignInForm;
