import type { ReactNode } from "react";
import clsx from "clsx";

type Variant = "default" | "secondary" | "primary" | "destructive" | "ghost";
type Size = "default" | "sm" | "lg" | "icon";
type Rounded = "default" | "sm" | "lg" | "none";

type Props = React.ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  rounded?: Rounded;
  children: ReactNode;
};

function Button({
  children,
  className,
  variant = "default",
  size = "default",
  rounded = "default",
  ...props
}: Props) {
  const base = `inline-flex justify-center border items-center text-sm font-medium tracking-wide gap-2 whitespace-nowrap transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:selection`;

  const variantClasses: Record<Variant, string> = {
    default: "bg-foreground text-background hover:bg-foreground/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    primary: "bg-primary text-primary-foreground hover:bg-primary/80",
    destructive:
      "bg-destructive text-secondary dark:text-secondary-foreground hover:bg-destructive/80",
    ghost: "border border-border bg-foreground/10",
  };

  const sizeClasses: Record<Size, string> = {
    default: "h-10 px-3",
    sm: "h-9 px-3",
    lg: "h-13 px-6",
    icon: "h-9 w-9 p-1",
  };

  const roundedClasses: Record<Rounded, string> = {
    default: "rounded",
    sm: "rounded-xs",
    lg: "rounded-xl",
    none: "",
  };

  return (
    <button
      className={clsx(
        base,
        variantClasses[variant],
        sizeClasses[size],
        roundedClasses[rounded],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
