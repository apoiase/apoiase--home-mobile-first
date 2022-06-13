// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconPlusIcon(props: ApoiaseIconPlusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 28"}
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
        d={"M22.472 15.2h-7.2v7.2h-2.4v-7.2h-7.2v-2.4h7.2V5.6h2.4v7.2h7.2v2.4z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconPlusIcon;
/* prettier-ignore-end */
