// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconProfileIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconProfileIcon(props: ApoiaseIconProfileIconProps) {
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
          "M20 10.85a3.15 3.15 0 110 6.3 3.15 3.15 0 010-6.3zm0 13.5c4.455 0 9.15 2.19 9.15 3.15v1.65h-18.3V27.5c0-.96 4.695-3.15 9.15-3.15zM20 8c-3.315 0-6 2.685-6 6s2.685 6 6 6 6-2.685 6-6-2.685-6-6-6zm0 13.5c-4.005 0-12 2.01-12 6V32h24v-4.5c0-3.99-7.995-6-12-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconProfileIcon;
/* prettier-ignore-end */
