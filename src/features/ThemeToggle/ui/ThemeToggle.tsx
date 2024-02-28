import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn, useTheme } from "@/shared";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-[0.15625rem] border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-primary"
      )}
      checked={theme === "light"}
      onCheckedChange={(checked) => {
        if (checked) {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "flex items-center justify-center pointer-events-none h-[1.1875rem] w-[1.1875rem] rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"
        )}
      >
        <svg
          className={cn("absolute opacity-100 transition-opacity", theme === 'dark' && 'opacity-0')}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.2283 7.77821C1.28442 7.72197 1.3548 7.68208 1.43187 7.66281C1.50895 7.64354 1.58982 7.64562 1.6658 7.66884C2.50002 7.92103 3.38703 7.94218 4.23232 7.73002C5.07761 7.51786 5.8495 7.08035 6.46575 6.4641C7.082 5.84785 7.51951 5.07596 7.73167 4.23067C7.94383 3.38538 7.92268 2.49837 7.67049 1.66415C7.64708 1.58813 7.64484 1.50718 7.66401 1.42998C7.68317 1.35279 7.72302 1.28228 7.77926 1.22604C7.8355 1.1698 7.90601 1.12996 7.9832 1.11079C8.06039 1.09163 8.14135 1.09387 8.21736 1.11727C9.37071 1.47058 10.3832 2.17864 11.1109 3.14071C11.7472 3.98555 12.1354 4.9911 12.2317 6.04438C12.3281 7.09766 12.1288 8.15695 11.6563 9.10323C11.1838 10.0495 10.4568 10.8453 9.55703 11.4012C8.6572 11.957 7.6202 12.251 6.56252 12.25C5.32858 12.2538 4.12747 11.8527 3.14346 11.1081C2.18139 10.3805 1.47333 9.36796 1.12002 8.21462C1.09688 8.13889 1.09474 8.05829 1.11381 7.98144C1.13288 7.90458 1.17245 7.83434 1.2283 7.77821ZM3.66955 10.4092C4.59621 11.1072 5.7438 11.4469 6.90106 11.3659C8.05833 11.2848 9.14738 10.7885 9.96772 9.96822C10.7881 9.14794 11.2845 8.05894 11.3656 6.90168C11.4468 5.74442 11.1071 4.5968 10.4092 3.67009C9.95456 3.06965 9.36675 2.58292 8.69205 2.24821C8.73049 2.51794 8.74986 2.79005 8.75002 3.06251C8.74843 4.57044 8.1487 6.01615 7.08243 7.08242C6.01616 8.14869 4.57045 8.74842 3.06252 8.75001C2.78951 8.74992 2.51686 8.73055 2.24658 8.69204C2.58161 9.36685 3.06872 9.95468 3.66955 10.4092Z"
            fill="#155DA4"
          />
        </svg>
        <svg
        className={cn("absolute opacity-0 transition-opacity", theme === 'dark' && 'opacity-100')}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00016 10.7917C9.09424 10.7917 10.7918 9.09412 10.7918 7.00004C10.7918 4.90596 9.09424 3.20837 7.00016 3.20837C4.90608 3.20837 3.2085 4.90596 3.2085 7.00004C3.2085 9.09412 4.90608 10.7917 7.00016 10.7917Z"
            stroke="#155DA4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.1648 11.165L11.089 11.0891M11.089 2.91079L11.1648 2.83496L11.089 2.91079ZM2.83484 11.165L2.91067 11.0891L2.83484 11.165ZM6.99984 1.21329V1.16663V1.21329ZM6.99984 12.8333V12.7866V12.8333ZM1.21317 6.99996H1.1665H1.21317ZM12.8332 6.99996H12.7865H12.8332ZM2.91067 2.91079L2.83484 2.83496L2.91067 2.91079Z"
            stroke="#155DA4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
}
