import { useGetEmployeeList } from "@/entities/Employee";
import { Button } from "@/shared";
import { Link } from "@tanstack/react-router";

export const MainPage = () => {
  const { data } = useGetEmployeeList({Count: '100'});

  if (!data) return;

  return (
    <div>
      {data.map((empl) => (
        <div key={empl.id}>
          {empl.name}
          <Button asChild>
            <Link to="/$employeeId" params={{ employeeId: empl.id.toString() }} />
          </Button>
        </div>
      ))}
    </div>
  );
};
