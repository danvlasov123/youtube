export type ButtonProps = {
  variant?: "dark" | "default" | "icon";
  size?: "small" | "medium" | "large";
} & React.ComponentProps<"button">;
