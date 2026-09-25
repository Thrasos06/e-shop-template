import { useState } from "react";

import FormInput from "../form-input/Form-input";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanUsername = username.trim();
    const cleanEmail = email.trim();

    if (cleanUsername.length < 3) {
      alert("Username must be at least 3 characters.");
      return;
    }

    if (cleanUsername.length > 30) {
      alert("Username must be 30 characters or less.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = await createAuthUserWithEmailAndPassword(cleanEmail, password);

    if (user) {
      await createUserDocumentFromAuth(user, {
        displayName: cleanUsername,
      });
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
          Create an account
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Sign up with your email and password to start shopping.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <FormInput
          label="Username"
          type="text"
          required
          minLength={3}
          maxLength={30}
          autoComplete="username"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Enter your username"
        />

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
          autoComplete="new-password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Minimum 8 characters"
        />

        <FormInput
          label="Confirm password"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Repeat your password"
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
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <a
          href="/sign-in"
          className="font-medium text-slate-950 hover:underline"
        >
          Sign in
        </a>
      </p>
    </div>
  );
};

export default SignUpForm;
