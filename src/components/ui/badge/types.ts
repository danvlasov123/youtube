import React from "react";

export type BadgeProps = {
  color?: "default" | "blue" | "green" | "yellow";
} & React.ComponentProps<"div">;
