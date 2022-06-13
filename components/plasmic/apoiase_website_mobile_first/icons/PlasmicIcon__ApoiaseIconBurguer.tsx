// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconBurguerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconBurguerIcon(props: ApoiaseIconBurguerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 24.75 24.75"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 3.875a2 2 0 012-2h20.75a2 2 0 010 4H2a2 2 0 01-2-2zm22.75 6.5H2a2 2 0 000 4h20.75a2 2 0 000-4zm0 8.5H2a2 2 0 000 4h20.75a2 2 0 000-4z"
        }
      ></path>
    </svg>
  );
}

export default ApoiaseIconBurguerIcon;
/* prettier-ignore-end */
