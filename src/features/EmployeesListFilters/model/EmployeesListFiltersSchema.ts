import { z } from "zod";

export const EmployeesListFiltersSchema = z.object({
  Name: z.string(),
  Position: z
    .enum(["Frontend", "Backend", "Analyst", "Manager", "Designer"])
    .array(),
  Gender: z.enum(["Male", "Female"]).array(),
  Stack: z.enum(['CSharp','React','Java','PHP','Figma','Word']).array()
});
