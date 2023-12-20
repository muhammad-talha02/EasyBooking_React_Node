import { Dispatch, ReactNode, createContext, useReducer } from "react";


type Hotel = {
  destination: string,
  dateRange: any,
  options: {
    adult: number | undefined,
    children: number | undefined,
    room: number | undefined,
  }
}


const defaultState = {
  destination: "",
  dateRange: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  }
} as Hotel


export const SearchContext = createContext<{ state: Hotel, dispatch: Dispatch<any> }>({
  state: defaultState,
  dispatch: () => null
})


const SearchReducer = (state: any, action: any) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET":
      return defaultState;

    default:
      return state;
  }
};
interface ChildrenProps {
  children: ReactNode
}

export const SearchContextProvider: React.FC<ChildrenProps> = ({ children }) => {

  const [state, dispatch] = useReducer(SearchReducer, defaultState)
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  )
}