import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';

const useAuthHandler = (handler) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch();

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle the successful authentication
        // e.g., set user data and perform additional actions
        if (handler) {
          handler(result.user);
        }

        dispatch(setUser({
          id: result.user.id,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL
        }))
        // console.log('Authentication successful:', result.user);
        // localStorage.setItem('userData', JSON.stringify(result.user));
      })
      .catch((error) => {
        // Handle authentication error
        console.error('Authentication error:', error);
      });
  };

  return handleAuth;
};

export default useAuthHandler;
