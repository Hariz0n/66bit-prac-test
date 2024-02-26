import { useGetEmployee } from "@/entities/Employee";
import { getRouteApi } from "@tanstack/react-router"

export const EmployeePage = () => {
  const { employeeId } = getRouteApi('/$employeeId').useParams();
  const { data, isLoading, isFetching } = useGetEmployee(employeeId)
  
  if (isLoading || isFetching) return <main>loading...</main>

  if (!data) return <main>not found</main>

  return <main>{data.name}</main>
}