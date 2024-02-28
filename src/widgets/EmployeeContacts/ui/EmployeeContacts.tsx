import { EmployeeResponseDto } from "@/entities/Employee";

export const EmployeeContacts = (
  contacts: Pick<
    EmployeeResponseDto,
    "phone" | "birthdate" | "dateOfEmployment"
  >
) => {
  return (
    <section className="container flex flex-col gap-4 md:gap-8">
      <h2 className="text-[1rem] md:text-[2rem] font-semibold leading-[19px] md:leading-[38px]">
        Основная информация
      </h2>
      <ul className="grid grid-cols-[min-content,auto] leading-4 md:leading-7 justify-start text-[14px] md:text-[1.5rem] gap-x-[18px] gap-y-3 md:gap-y-6 md:gap-x-[44px]">
        <p className="font-medium">Контактный&nbsp;телефон:</p>
        <p>{contacts.phone}</p>
        <p className="font-medium">Дата рождения:</p>
        <p>{contacts.birthdate}</p>
        <p className="font-medium">Дата устройства</p>
        <p>{contacts.dateOfEmployment}</p>
      </ul>
    </section>
  );
};
