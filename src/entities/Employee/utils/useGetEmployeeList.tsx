import { useQuery } from "@tanstack/react-query"
import { EmployeeListRequestDto } from "../model/EmployeeListRequestDto"
import { fetchEmployeeList } from "../lib/fetchEmployeeList"

export const useGetEmployeeList = (params?: EmployeeListRequestDto) => {
  const query = useQuery({queryKey: ['employee', params], queryFn: () => fetchEmployeeList(params), staleTime: 1000 * 60 * 5})
  
  return query;
}