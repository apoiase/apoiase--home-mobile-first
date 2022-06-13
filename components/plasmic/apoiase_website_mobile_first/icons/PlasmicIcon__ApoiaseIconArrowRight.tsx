// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconArrowRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconArrowRightIcon(
  props: ApoiaseIconArrowRightIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 31"}
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
          "M10.85 8.073L12.723 6.2l9.3 9.3-9.3 9.3-1.873-1.873 7.427-7.427-7.427-7.427z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconArrowRightIcon;
/* prettier-ignore-end */
