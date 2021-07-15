import { auth, firebase } from '../services/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext, ReactNode } from 'react';
type User = {
  id: string;
  name: string;
  avatar: string;
};
type authContextType = {
  user: User | undefined;
  signInWithGoogle: () => void;
};
export const authContext = createContext({} as authContextType);
type AuthContextProviderProps = {
  children: ReactNode;
};
export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;
        if (!displayName || !photoURL) {
          throw new Error('Missing information from google account');
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });
    return () => {
      unsuscribe();
    };
  }, []);

  async function signInWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;
        if (!displayName || !photoURL) {
          throw new Error('Missing information from google account');
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    } catch (err) {
      console.error('entrou aqui==> ', err);
    }
    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   auth
    //     .signInWithPopup(provider)
    //     .then((response) => console.log('response', response))
    //     .catch((error) => console.log('erroo', error));
  }

  return (
    <authContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </authContext.Provider>
  );
}
