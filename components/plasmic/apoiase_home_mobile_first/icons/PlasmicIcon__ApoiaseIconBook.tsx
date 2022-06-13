// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconBookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconBookIcon(props: ApoiaseIconBookIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Camada 1"}
      viewBox={"0 0 82 82"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18 54V17.35S18.61 11 24.81 11H63v48H24.24a6.5 6.5 0 100 13H64m-42-6h40M50.98 11.06l11.49 11.67m.09 23.89L50.89 58.11"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconBookIcon;
/* prettier-ignore-end */
