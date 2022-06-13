// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconHeartSelectedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconHeartSelectedIcon(
  props: ApoiaseIconHeartSelectedIconProps
) {
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
          "M19.889 32l-1.869-1.726C11.382 24.166 7 20.137 7 15.194 7 11.165 10.12 8 14.089 8c2.243 0 4.395 1.06 5.8 2.733C21.294 9.06 23.446 8 25.689 8c3.97 0 7.089 3.165 7.089 7.194 0 4.943-4.382 8.972-11.02 15.093L19.888 32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconHeartSelectedIcon;
/* prettier-ignore-end */
