import {
  Align,
  Side,
} from "node_modules/@base-ui-components/react/esm/utils/useAnchorPositioning";
import React from "react";

export type MenuProps = {
  trigger: React.ReactNode;
  options?: {
    icon?: React.ReactNode;
    title: string;
    label: string;
  }[];
  positioner?: {
    side: Side;
    align: Align;
  };
};
