import type { ReactNode } from "react";

type Props = React.ComponentProps<"button"> & {
  variant?: "default" | "secondary" | "primary" | "destructive" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  children: ReactNode;
};

function Button({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: Props) {
  let colors = "";
  let sizes = "";
  switch (variant) {
    case "default":
      colors = "bg-foreground text-background hover:bg-foreground/80";
      break;
    case "secondary":
      colors = "bg-secondary text-secondary-foreground hover:bg-secondary/80";
      break;
    case "primary":
      colors = "bg-primary text-primary-foreground hover:bg-primary/80";
      break;
    case "destructive":
      colors =
        "bg-destructive text-secondary dark:text-secondary-foreground hover:bg-destructive/80";
      break;
    case "ghost":
      colors = "border-none hover:scale-110";
      break;
    default:
      colors = "";
  }
  switch (size) {
    case "default":
      sizes = "h-10 px-3";
      break;
    case "sm":
      sizes = "h-9 px-3";
      break;
    case "lg":
      sizes = "h-11 px-4";
      break;
    case "icon":
      sizes = "h-9 w-9 p-1";
      break;
    default:
      sizes = "";
  }
  return (
    <button
      className={`inline-flex justify-center border items-center text-sm font-medium tracking-wide gap-2 whitespace-nowrap rounded ${colors} ${sizes} transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:selection: ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
