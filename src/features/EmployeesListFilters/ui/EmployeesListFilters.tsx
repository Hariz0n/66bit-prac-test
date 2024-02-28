import { EmployeeListRequestDto } from "@/entities/Employee";
import {
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Input,
  badgeVariants,
} from "@/shared";
import { Dispatch, FC, SetStateAction } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { EmployeesListFiltersSchema } from "../model/EmployeesListFiltersSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { positionItems } from "../lib/positionItems";
import { ChevronDown, X } from "lucide-react";
import { genderItems } from "../lib/genderItems";
import { stackItems } from "../lib/stackItems";

type EmployeesListFiltersProps = {
  setQuery: Dispatch<SetStateAction<EmployeeListRequestDto>>;
};

export const EmployeesListFilters: FC<EmployeesListFiltersProps> = ({
  setQuery,
}) => {
  const form = useForm<z.infer<typeof EmployeesListFiltersSchema>>({
    defaultValues: {
      Name: "",
      Position: [],
      Gender: [],
      Stack: [],
    },
    resolver: zodResolver(EmployeesListFiltersSchema),
  });

  const formSubmitHandler: SubmitHandler<
    z.infer<typeof EmployeesListFiltersSchema>
  > = (data) => {
    // return;
    setQuery((prev) => ({
      ...prev,
      Name: data.Name,
      Gender: data.Gender,
      Position: data.Position,
      Stack: data.Stack,
    }));
  };

  return (
    <section>
      <form onSubmit={form.handleSubmit(formSubmitHandler)}>
        <div className="container flex items-center justify-between mb-4 gap-3 md:mb-7 md:gap-7 flex-wrap">
          <h2 className="order-1 text-[1.25rem] leading-6 font-bold md:text-[2.5rem] md:leading-[3rem]">
            Список сотрудников
          </h2>
          <div className="order-4 md:order-2 flex items-center gap-3 flex-wrap">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 md:gap-3">
                <span className="text-[0.75rem] leading-[0.875rem] md:text-[1.25rem] md:leading-6">
                  Должность
                </span>
                <ChevronDown className="text-primary -m-1 h-4 w-4 md:h-6 md:w-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                sideOffset={8}
                className="min-w-[14rem] md:min-w-[16.75rem]"
              >
                <Controller
                  control={form.control}
                  name="Position"
                  render={({ field }) => {
                    return (
                      <div className="flex flex-col gap-3 md:gap-4">
                        {positionItems.map((positionItem) => (
                          <div
                            key={positionItem.id}
                            className="flex items-center justify-between"
                          >
                            <label
                              className="text-[0.75rem] leading-[0.875rem] md:text-[1rem] md:leading-5"
                              htmlFor={`position-${positionItem.id}`}
                            >
                              {positionItem.label}
                            </label>
                            <Checkbox
                              id={`position-${positionItem.id}`}
                              checked={field.value?.includes(positionItem.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...field.value,
                                      positionItem.id,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== positionItem.id
                                      )
                                    );
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  }}
                />
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 md:gap-3">
                <span className="text-[0.75rem] leading-[0.875rem] md:text-[1.25rem] md:leading-6">
                  Пол
                </span>
                <ChevronDown className="text-primary -m-1 h-4 w-4 md:h-6 md:w-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                sideOffset={8}
                className="min-w-[14rem] md:min-w-[16.75rem]"
              >
                <Controller
                  control={form.control}
                  name="Gender"
                  render={({ field }) => {
                    return (
                      <div className="flex flex-col gap-3 md:gap-4">
                        {genderItems.map((genderItem) => (
                          <div
                            key={genderItem.id}
                            className="flex items-center justify-between"
                          >
                            <label
                              className="text-[0.75rem] leading-[0.875rem] md:text-[1rem] md:leading-5"
                              htmlFor={`position-${genderItem.id}`}
                            >
                              {genderItem.label}
                            </label>
                            <Checkbox
                              id={`position-${genderItem.id}`}
                              checked={field.value?.includes(genderItem.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...field.value,
                                      genderItem.id,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== genderItem.id
                                      )
                                    );
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  }}
                />
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 md:gap-3">
                <span className="text-[0.75rem] leading-[0.875rem] md:text-[1.25rem] md:leading-6">
                  Стек&nbsp;технологий
                </span>
                <ChevronDown className="text-primary -m-1 h-4 w-4 md:h-6 md:w-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                sideOffset={8}
                className="min-w-[14rem] md:min-w-[16.75rem]"
              >
                <Controller
                  control={form.control}
                  name="Stack"
                  render={({ field }) => {
                    return (
                      <div className="flex flex-col gap-3 md:gap-4">
                        {stackItems.map((stackItem) => (
                          <div
                            key={stackItem.id}
                            className="flex items-center justify-between"
                          >
                            <label
                              className="text-[0.75rem] leading-[0.875rem] md:text-[1rem] md:leading-5"
                              htmlFor={`position-${stackItem.id}`}
                            >
                              {stackItem.label}
                            </label>
                            <Checkbox
                              id={`position-${stackItem.id}`}
                              checked={field.value?.includes(stackItem.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...field.value,
                                      stackItem.id,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== stackItem.id
                                      )
                                    );
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  }}
                />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Input
            placeholder="Поиск"
            className="grow order-3"
            {...form.register("Name")}
          />
        </div>
        <div className="bg-muted">
          <div className="container flex flex-col md:flex-row gap-4 items-stretch justify-between md:items-center py-4">
            <div className="flex flex-col md:flex-row md:items-center gap-3 max-w-full overflow-y-auto grow-0">
              <h3 className="font-medium text-[0.875rem] leading-4 md:text-[1.25rem] md:leading-6">
                Выбранные&nbsp;фильтры:
              </h3>
              <div className="flex items-center gap-4 max-w-full overflow-x-auto">
                <Controller
                  control={form.control}
                  name="Position"
                  render={({ field }) => (
                    <>
                      {positionItems
                        .filter((posItem) => field.value.includes(posItem.id))
                        .map((posItem) => (
                          <button
                            onClick={() =>
                              form.setValue(
                                "Position",
                                field.value.filter(
                                  (fieldItem) => posItem.id !== fieldItem
                                )
                              )
                            }
                            className={badgeVariants({
                              className: "bg-white dark:bg-background shrink-0",
                            })}
                            type="button"
                            key={posItem.id}
                          >
                            <X className="h-5 w-5 mr-2" />
                            <span className="!break-keep">{posItem.label}</span>
                          </button>
                        ))}
                    </>
                  )}
                />
                <Controller
                  control={form.control}
                  name="Gender"
                  render={({ field }) => (
                    <>
                      {genderItems
                        .filter((genderItem) =>
                          field.value.includes(genderItem.id)
                        )
                        .map((posItem) => (
                          <button
                            onClick={() =>
                              form.setValue(
                                "Gender",
                                field.value.filter(
                                  (fieldItem) => posItem.id !== fieldItem
                                )
                              )
                            }
                            className={badgeVariants({
                              className: "bg-white dark:bg-background shrink-0",
                            })}
                            type="button"
                            key={posItem.id}
                          >
                            <X className="h-5 w-5 mr-2" />
                            {posItem.label}
                          </button>
                        ))}
                    </>
                  )}
                />
                <Controller
                  control={form.control}
                  name="Stack"
                  render={({ field }) => (
                    <>
                      {stackItems
                        .filter((stackItem) =>
                          field.value.includes(stackItem.id)
                        )
                        .map((stackItem) => (
                          <button
                            onClick={() =>
                              form.setValue(
                                "Stack",
                                field.value.filter(
                                  (fieldItem) => stackItem.id !== fieldItem
                                )
                              )
                            }
                            className={badgeVariants({
                              className: "bg-white dark:bg-background shrink-0",
                            })}
                            type="button"
                            key={stackItem.id}
                          >
                            <X className="h-5 w-5 mr-2" />
                            {stackItem.label}
                          </button>
                        ))}
                    </>
                  )}
                />
              </div>
            </div>
            <Button className="shrink-0" type="submit">
              Найти
            </Button>
          </div>
        </div>
      </form>
      ;
    </section>
  );
};
