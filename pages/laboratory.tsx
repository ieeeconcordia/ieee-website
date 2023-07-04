import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function GoogleSignInButton() {
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      // User is signed in with Google successfully
      console.log(result.user);
    } catch (error) {
      // Handle any errors that occur during the sign-in process
      console.error(error);
    }
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
}
