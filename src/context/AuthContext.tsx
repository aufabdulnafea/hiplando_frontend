"use client";

import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, type User as FirebaseUser } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextType {
    user: FirebaseUser | null
    loading: boolean
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true
});

export function AuthProvider(props: PropsWithChildren) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if(loading) return <></>

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
