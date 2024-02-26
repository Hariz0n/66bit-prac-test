export type EmployeeListRequestDto = {
  Page?: string;
  Count?: string;
  Name?: string;
  Gender?: ("Male" | "Female")[];
  Position?: ("Frontend" | "Backend" | "Analyst" | "Manager" | "Designer")[];
  Stack?: ("CSharp" | "React" | "Java" | "PHP" | "Figma" | "Word")[];
};
