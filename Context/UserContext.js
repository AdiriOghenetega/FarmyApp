import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider({children}) {
  const [user, setUser] = useState({
  _id: "",
  name : "",
  email : "",
  avatar : "",
  phoneNumber : ""
  })

  const [selectedAccount,setSelectedAccount]=useState("")

  return <Context.Provider value={{user, setUser,selectedAccount,setSelectedAccount}}>
      {children}
  </Context.Provider>
}

export default Context