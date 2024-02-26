import { useQuery } from "@tanstack/react-query"
import { fetchEmployee } from "../lib/fetchEmployee";

export const useGetEmployee = (id: string | string) => {
  const query = useQuery({ queryKey: ['employee', id], queryFn: () => fetchEmployee(id), staleTime: 1000 * 60 * 5 })

  return query;
}