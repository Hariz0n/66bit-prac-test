import { useInfiniteQuery } from "@tanstack/react-query";
import { EmployeeListRequestDto } from "../model/EmployeeListRequestDto";
import { fetchEmployeeList } from "../lib/fetchEmployeeList";

export const useGetEmployeeList = (params?: EmployeeListRequestDto) => {  
  const query = useInfiniteQuery({
    queryKey: ["employee", params],
    queryFn: (ctx) =>
      fetchEmployeeList({ ...params, Page: params?.Page || ctx.pageParam.toString() }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    staleTime: 1000 * 60 * 60
  });

  return query;
};
