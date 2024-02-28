import { columns } from "../model/columns";
import { useEffect, useState } from "react";
import {
  EmployeeListRequestDto,
  useGetEmployeeList,
} from "@/entities/Employee";
import { EmployeesTable } from "./EmployeesTable";
import { EmployeesListFilters } from "@/features/EmployeesListFilters";

export const EmployeesList = () => {
  const [queries, setQueries] = useState<EmployeeListRequestDto>({
    Count: "20",
  });
  

  const { data, isFetching, hasNextPage, fetchNextPage } =
    useGetEmployeeList(queries);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 250 &&
        hasNextPage &&
        !isFetching
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <EmployeesListFilters setQuery={setQueries} />
      <section className="container">
        {data && <EmployeesTable columns={columns} data={data.pages.flat()} />}
      </section>
    </>
  );
};
