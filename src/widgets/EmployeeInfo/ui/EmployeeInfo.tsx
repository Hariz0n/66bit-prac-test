import { EmployeeResponseDto } from "@/entities/Employee";
import { Avatar, AvatarFallback, AvatarImage, Badge } from "@/shared";

export const EmployeeInfo = (
  employeeData: Pick<
    EmployeeResponseDto,
    "name" | "photo" | "stack" | "position"
  >
) => {
  return (
    <section className="container flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <Avatar className="h-[6.25rem] w-[6.25rem] md:h-[10.25rem] md:w-[10.25rem]">
          <AvatarImage src={employeeData.photo} />
          <AvatarFallback>NF or LD</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="text-[1.25rem] font-bold leading-6 md:text-[2.5rem] md:leading-[3.75rem]">
            {employeeData.name}
          </h2>
          <p className="text-[0.875rem] leading-4 line-clamp-1 md:text-[1.5rem] md:leading-7">
            {employeeData.position}
          </p>
          <ul className="hidden md:flex items-center gap-4 max-w-full overflow-x-auto overflow-y-hidden scroll-smooth scroll snap-x snap-proximity">
            {employeeData.stack.map((skill) => (
              <li className="snap-start" key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="flex md:hidden items-center gap-2 max-w-full overflow-x-auto overflow-y-hidden scroll-smooth scroll snap-x snap-proximity">
        {employeeData.stack.map((skill) => (
          <li className="snap-start" key={skill}>
            <Badge>{skill}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
};
