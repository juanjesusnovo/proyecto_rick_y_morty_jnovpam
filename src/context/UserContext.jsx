import { Children, createContext, useContext, useState } from "react";


export const UserContext = createContext()

const UserProvider = ({children}) => {


  const data = []

  const [user, setUser] = useState()
  const [favs, setFavs] = useState(data)


  return (
    <UserContext.Provider value={{user, setUser, favs, setFavs}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

export const useUserContext = () => useContext(UserContext)