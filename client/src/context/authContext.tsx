import React, { Dispatch, createContext, useEffect, useReducer } from "react"

export type User = {
    user: any | null,
    loading: boolean,
    error: any,
}

const defaultState:User = {
    user: null,
    loading: false,
    error: null,
}


export const AuthContext = createContext<{ state: User, dispatch: Dispatch<any> }>({ state: defaultState, dispatch: () => null });


type ChildrenProps = {
    children: React.ReactNode
}

const AuthReducer = (state: any, action: any) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,

            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,

            };
        case "LOGIN_FAILED":
            return {
                user: null,
                loading: false,
                error: action.payload,

            };

        default:
            return state;
    }
};

export const AuthContextProvider: React.FC<ChildrenProps> = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, defaultState)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))

    }, [state.user])
    
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}