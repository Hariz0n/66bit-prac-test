"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shared/ui/table";
import { EmployeeType } from "../model/employeeType";
import { useNavigate } from "@tanstack/react-router";

interface EmployeesTableProps {
  columns: ColumnDef<EmployeeType, EmployeeType>[];
  data: EmployeeType[];
  isFetching?: boolean;
}

export const EmployeesTable = ({
  columns,
  data,
  isFetching,
}: EmployeesTableProps) => {
  const navigate = useNavigate();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-none">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                onClick={() =>
                  navigate({
                    to: "/employee/$employeeId",
                    params: { employeeId: row.original.id.toString() },
                  })
                }
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
          {isFetching && (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Загрузка...
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
