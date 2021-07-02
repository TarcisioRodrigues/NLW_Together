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
  signInWithGoogle: () => Promise<void>;
};
export const authContext = createContext({} as authContextType);
type AuthContextProviderProps = {
  children: ReactNode;
};
export function AuthContextProvider(props: AuthContextProviderProps) {
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
  const [user, setUser] = useState<User>();
  async function signInWithGoogle() {
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
  }
  return (
    <authContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </authContext.Provider>
  );
}
