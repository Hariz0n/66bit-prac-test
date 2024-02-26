import { EmployeeResponseDto } from "../model/EmployeeResponseDto";

export const fetchEmployee = async (id: number | string): Promise<EmployeeResponseDto> => {
  const response = await fetch(
    `https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch employee");
  }

  return await response.json();
};
