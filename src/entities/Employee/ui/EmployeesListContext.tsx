import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { EmployeeListRequestDto } from "..";

type EmployeesListContextType = {
  nameFilter: string;
  setNameFilter: Dispatch<SetStateAction<string>>;
  setQuery: () => void;
};

const initialContext: EmployeesListContextType = {
  nameFilter: "",
  setNameFilter: () => {},
  setQuery: () => {},
};

export const EmployeesListContext = createContext(initialContext);

type EmployeesListContextWrapperProps = {
  setQueries: Dispatch<SetStateAction<EmployeeListRequestDto>>;
  children: ReactNode;
};

export const EmployeesListContextWrapper: FC<
  EmployeesListContextWrapperProps
> = ({ setQueries, children }) => {
  const [nameFilter, setNameFilter] = useState("");

  const setQuery = () => {
    setQueries((prev) => ({
      ...prev,
      Name: nameFilter,
    }));
  };

  return (
    <EmployeesListContext.Provider
      value={{
        nameFilter,
        setNameFilter,
        setQuery,
      }}
    >
      {children}
    </EmployeesListContext.Provider>
  );
};
