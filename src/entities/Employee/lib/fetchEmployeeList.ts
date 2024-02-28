import { EmployeeListRequestDto } from "../model/EmployeeListRequestDto";
import { EmployeeResponseDto } from "../model/EmployeeResponseDto";
import { toUrlWithQueryParams } from "@/shared/lib/toUrlWithQueryParams";

export const fetchEmployeeList = async (
  queries?: EmployeeListRequestDto
): Promise<EmployeeResponseDto[]> => {
  const url = toUrlWithQueryParams(
    "https://frontend-test-api.stk8s.66bit.ru/api/Employee",
    queries
  );

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch employee");
  }

  return await response.json();
};
