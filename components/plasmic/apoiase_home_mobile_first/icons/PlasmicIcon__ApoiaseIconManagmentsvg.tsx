// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconManagmentsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconManagmentsvgIcon(
  props: ApoiaseIconManagmentsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 92 97"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#CdiYbmftaa)"}>
        <path
          d={
            "M79.33 79.95v-6.546h.972v.988h.068c.12-.323.336-.586.648-.788a1.907 1.907 0 011.057-.302c.074 0 .166 0 .277.004.11.003.194.007.251.013v1.022a2.967 2.967 0 00-.234-.038c-.12-.02-.246-.03-.38-.03a1.78 1.78 0 00-.852.2 1.47 1.47 0 00-.801 1.334v4.142h-1.005z"
          }
          fill={"#DB2328"}
        ></path>

        <path
          d={
            "M1.89 77.29L35.64 3.04l34.59 74.25m.02.07c0 9.76-15.3 17.68-34.18 17.68S1.9 87.12 1.9 77.36"
          }
          stroke={"#DB2328"}
          strokeWidth={"2.5"}
          strokeMiterlimit={"10"}
        ></path>

        <path
          d={"M70.25 77.36c0-9.76-15.3-17.68-34.18-17.68S1.9 67.6 1.9 77.36"}
          stroke={"#DB2328"}
          strokeWidth={"2.5"}
          strokeMiterlimit={"10"}
        ></path>

        <path
          d={
            "M25.657 48.762v3.937H24.65v-8.727h1.006v3.204h.085a1.85 1.85 0 01.69-.805c.31-.202.722-.303 1.236-.303.446 0 .837.09 1.172.269.335.176.595.447.78.814.187.364.28.827.28 1.39v4.158h-1.005v-4.09c0-.52-.135-.923-.405-1.207-.267-.287-.637-.43-1.112-.43-.33 0-.625.07-.886.209a1.52 1.52 0 00-.614.61c-.148.266-.221.59-.221.97z"
          }
          fill={"#DB2328"}
        ></path>

        <path
          d={"M35.72 1.45v5m0 4v61m0 2v4h4m4 0h21m2 0h4m-35-8h9v8"}
          stroke={"#DB2328"}
          strokeWidth={"2"}
          strokeMiterlimit={"10"}
        ></path>
      </g>

      <defs>
        <clipPath id={"CdiYbmftaa"}>
          <path
            fill={"#fff"}
            transform={"translate(.65 .049)"}
            d={"M0 0h91.17v96.24H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ApoiaseIconManagmentsvgIcon;
/* prettier-ignore-end */
