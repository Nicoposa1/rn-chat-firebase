import React, {useState, useContext, createContext, useEffect} from "react";
import { View, ActivityIndicator } from "react-native";
import { onAuthStateChanged } from 'firebase/auth'

const Context = ({children}) => {
  const AuthenticatedUserContext = createContext();
  const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return(
      <AuthenticatedUserContext.Provider value={{user, setUser}}>
        {children}
      </AuthenticatedUserContext.Provider>
    )
  }
}
