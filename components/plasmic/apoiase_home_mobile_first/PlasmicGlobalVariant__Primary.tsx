// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";
export type PrimaryValue = "unnamedVariant" | "hover";
export const PrimaryContext = React.createContext<PrimaryValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function usePrimary() {
  return React.useContext(PrimaryContext);
}

export default PrimaryContext;
/* prettier-ignore-end */
