// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconMuralIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconMuralIcon(props: ApoiaseIconMuralIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 82 82"}
      xmlSpace={"preserve"}
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

      <defs>
        <path id={"aGxwrNtn2a"} d={"M0 0h82v82H0z"}></path>
      </defs>

      <clipPath id={"aGxwrNtn2b"}>
        <use xlinkHref={"#aGxwrNtn2a"} overflow={"visible"}></use>
      </clipPath>

      <g clipPath={"url(#aGxwrNtn2b)"} fill={"currentColor"}>
        <path
          d={
            "M52.2 66.9h-49c-.6 0-1-.4-1-1V16.1c0-.6.4-1 1-1h49c.6 0 1 .4 1 1v49.8c0 .6-.4 1-1 1zm-48-2h47V17.1h-47v47.8zm74.3-29.4h-20c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1zm0 7h-20c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1zm0-14h-20c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1zm0 22h-20c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1zm0 7h-20c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1zm0 7h-20c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1z"
          }
        ></path>

        <path
          d={
            "M44.5 59.5H9.8c-.3 0-.7-.2-.8-.5-.2-.3-.2-.6-.1-1l10.8-23.4c.2-.3.5-.6.9-.6s.7.2.9.5l7.2 13.1 3.7-4.1c.2-.2.5-.4.8-.3.3 0 .6.1.7.4l11.3 14.1c.2.3.3.7.1 1.1-.1.5-.4.7-.8.7zm-33.1-2h31l-9.3-11.6-3.9 4.3c-.2.2-.5.4-.9.3-.3 0-.6-.2-.8-.5l-6.9-12.6-9.2 20.1zm27.4-17.2c-2.8 0-5.1-2.4-5.1-5.3s2.3-5.3 5.1-5.3 5.1 2.4 5.1 5.3-2.3 5.3-5.1 5.3zm0-8.7c-1.7 0-3.1 1.5-3.1 3.3s1.4 3.3 3.1 3.3c1.7 0 3.1-1.5 3.1-3.3s-1.4-3.3-3.1-3.3z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default ApoiaseIconMuralIcon;
/* prettier-ignore-end */
