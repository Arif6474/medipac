'use client'
import { createContext} from "react";
const AppContext = createContext({})

function AppContextProvider({ children }) {


    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppContextProvider
}

export default AppContext;