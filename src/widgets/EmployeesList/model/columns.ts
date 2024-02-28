import { ColumnDef } from "@tanstack/react-table";
import { EmployeeType } from "./employeeType";

export const columns: ColumnDef<EmployeeType>[] = [
  {
    accessorKey: "name",
    header: "ФИО",
  },
  {
    accessorKey: "position",
    header: "Должность",
  },
  {
    accessorKey: "phone",
    header: "Телефон",
  },
  { accessorKey: "birthdate", header: "Дата рождения" },
];
