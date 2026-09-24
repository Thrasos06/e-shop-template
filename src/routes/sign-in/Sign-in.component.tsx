import {
  signInWithGoogle,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const handleGoogleSignIn = async () => {
  const user = await signInWithGoogle();

  if (user) {
    await createUserDocumentFromAuth(user);
  }
};

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>

      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
