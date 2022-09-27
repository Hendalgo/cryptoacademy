import { createContext, useState} from "react";


const NavContext = createContext();

const NavProvider = ({children}) => {
    const [tutorial, setTutorial] = useState(false);
    const [uriCircle, setUriCircle] = useState();
    return(
        <NavContext.Provider value={{tutorial, setTutorial, uriCircle, setUriCircle}}>
            {children}
        </NavContext.Provider>
    )
}

export {NavContext, NavProvider};