import React from "react";

export type MenuProps = {
  trigger: React.ReactNode;
  options?: {
    icon?: React.ReactNode;
    title: string;
    label: string;
  }[];
};
