// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconCoinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconCoinIcon(props: ApoiaseIconCoinIconProps) {
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
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M29.54 27.56l-7.23 5.42"}
      ></path>

      <ellipse
        cx={"44.98"}
        cy={"38.01"}
        rx={"9.19"}
        ry={"22.61"}
        transform={"rotate(-36.88 44.995 38.014)"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></ellipse>

      <path
        d={
          "M58.55 56.09l-8 6c-4.06 3-13.43-2.58-20.92-12.56S19.39 29 23.45 25.91l8-6m.62 17.05l-7.23 5.43m17 7.59l-7.23 5.43m14.11.72l-5.79 4.34"
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

export default ApoiaseIconCoinIcon;
/* prettier-ignore-end */
