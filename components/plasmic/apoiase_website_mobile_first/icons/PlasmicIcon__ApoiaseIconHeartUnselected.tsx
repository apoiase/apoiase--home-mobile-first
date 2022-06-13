// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconHeartUnselectedIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ApoiaseIconHeartUnselectedIcon(
  props: ApoiaseIconHeartUnselectedIconProps
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
          "M25.689 8c-2.243 0-4.395 1.06-5.8 2.733C18.484 9.06 16.332 8 14.089 8 10.119 8 7 11.165 7 15.194c0 4.943 4.382 8.972 11.02 15.093L19.889 32l1.869-1.726c6.638-6.108 11.02-10.137 11.02-15.08 0-4.029-3.12-7.194-7.09-7.194zm-5.671 20.338l-.13.13-.128-.13C13.625 22.7 9.578 18.973 9.578 15.193c0-2.615 1.933-4.577 4.51-4.577.928 0 1.843.282 2.625.765.894.552 3.176 2.73 3.176 2.73s2.285-2.178 3.177-2.73a5.026 5.026 0 012.623-.765c2.578 0 4.511 1.962 4.511 4.578 0 3.78-4.047 7.507-10.182 13.144z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconHeartUnselectedIcon;
/* prettier-ignore-end */
