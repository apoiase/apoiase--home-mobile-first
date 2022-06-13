// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconSearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconSearchIcon(props: ApoiaseIconSearchIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M25.153 23.094h-1.084l-.385-.37a8.88 8.88 0 002.155-5.805A8.92 8.92 0 0016.919 8 8.92 8.92 0 008 16.92a8.92 8.92 0 008.92 8.919c2.209 0 4.24-.81 5.804-2.155l.37.385v1.084L29.955 32 32 29.955l-6.847-6.86zm-8.234 0a6.167 6.167 0 01-6.175-6.175 6.167 6.167 0 016.175-6.175 6.167 6.167 0 016.175 6.175 6.167 6.167 0 01-6.175 6.175z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconSearchIcon;
/* prettier-ignore-end */
