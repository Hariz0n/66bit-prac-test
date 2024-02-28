import { createRoute } from "@tanstack/react-router";
import { EmployeePage } from "../ui/EmployeePage";
import { fetchEmployee } from "@/entities/Employee/lib/fetchEmployee";
import { globalLayout } from "@/app/main";

export const employeeRoute = createRoute({
  getParentRoute: () => globalLayout,
  path: 'employee',
  beforeLoad: () => ({ title: "Список сотрудников", path: "/" }),
})

export const employeeIdRoute = createRoute({
  getParentRoute: () => employeeRoute,
  path: "$employeeId",
  component: EmployeePage,
  beforeLoad: async ({ context, params }) => {
    const result = await context.queryClient.ensureQueryData({
      queryKey: ["employee", params.employeeId],
      queryFn: () => fetchEmployee(params.employeeId.toString()),
    });
    return { title: result.name, path: `/employee/${params.employeeId}` };
  },
});