import React from "react";
<<<<<<< HEAD
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
  return (
    <>
      <UserContext.Provider value ={{user, setUser}}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
=======
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState(null)
     return (
        <UserContext.Provider value = {{user,setUser}}>
        {
            children
        }
        </UserContext.Provider>
    )
}


export default UserContextProvider
>>>>>>> d744643402369421dcccdfafe7bdd56966b51fb3
