import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const useAuthHandler = (handler) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle the successful authentication
        // e.g., set user data and perform additional actions
        if (handler) {
          handler(result.user);
        }
        console.log('Authentication successful:', result.user);
        localStorage.setItem('userData', JSON.stringify(result.user));
      })
      .catch((error) => {
        // Handle authentication error
        console.error('Authentication error:', error);
      });
  };

  return handleAuth;
};

export default useAuthHandler;
