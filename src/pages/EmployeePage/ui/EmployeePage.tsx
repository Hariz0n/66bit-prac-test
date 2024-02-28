import { useGetEmployee } from "@/entities/Employee";
import { EmployeeContacts } from "@/widgets/EmployeeContacts";
import { EmployeeInfo } from "@/widgets/EmployeeInfo";
import { getRouteApi } from "@tanstack/react-router"

export const EmployeePage = () => {
  const { employeeId } = getRouteApi('/globalLayout/employee/$employeeId').useParams();
  const { data, isLoading, isFetching } = useGetEmployee(employeeId)
  
  if (isLoading || isFetching) return <main>loading...</main>

  if (!data) return <main>not found</main>

  return <main className="flex flex-col gap-5">
    <EmployeeInfo name={data.name} photo={data.photo} position={data.position} stack={data.stack} />
    <div className="border-b border-muted md:container" />
    <EmployeeContacts phone={data.phone} birthdate={data.birthdate} dateOfEmployment={data.dateOfEmployment} />
  </main>
}