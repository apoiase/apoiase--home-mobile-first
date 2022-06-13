// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconArrowLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconArrowLeftIcon(props: ApoiaseIconArrowLeftIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 34"}
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
          "M22.455 8.855L20.4 6.8 10.2 17l10.2 10.2 2.055-2.055L14.309 17l8.146-8.145z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconArrowLeftIcon;
/* prettier-ignore-end */
