// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconCardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconCardIcon(props: ApoiaseIconCardIconProps) {
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
          "M32.235 8H8.026a2.99 2.99 0 00-3.01 3L5 29c0 1.665 1.347 3 3.026 3h24.209a3.003 3.003 0 003.026-3V11c0-1.665-1.347-3-3.026-3zm0 21H8.026v-9h24.209v9zm0-15H8.026v-3h24.209v3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconCardIcon;
/* prettier-ignore-end */
