// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconManagerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconManagerIcon(props: ApoiaseIconManagerIconProps) {
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
        <path id={"OCLB6TJBTa"} d={"M0 0h82v82H0z"}></path>
      </defs>

      <clipPath id={"OCLB6TJBTb"}>
        <use xlinkHref={"#OCLB6TJBTa"} overflow={"visible"}></use>
      </clipPath>

      <g clipPath={"url(#OCLB6TJBTb)"} fill={"currentColor"}>
        <path
          d={
            "M66 70.1H20.5c-.6 0-1-.4-1-1s.4-1 1-1H66c.6 0 1 .4 1 1s-.4 1-1 1zm-53.4-8.4c-.6 0-1-.4-1-1V12.9c0-.6.4-1 1-1h46.5c.6 0 1 .4 1 1v47.8c0 .6-.4 1-1 1s-1-.4-1-1V13.9H13.6v46.8c0 .6-.5 1-1 1z"
          }
        ></path>

        <path
          d={
            "M66 70.1c-.6 0-1-.4-1-1s.4-1 1-1c4.7 0 5.9-4.3 6.3-6.4H30.2c-.5 4.7-4.5 8.4-9.3 8.4-5.2 0-9.4-4.2-9.4-9.4 0-.6.4-1 1-1s1 .4 1 1c0 4.1 3.3 7.4 7.4 7.4s7.4-3.3 7.4-7.4c0-.6.4-1 1-1h44.1c.3 0 .5.1.7.3.2.2.3.5.3.7-.1 3.3-2.1 9.4-8.4 9.4zM52.5 56.5h-20c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1z"
          }
        ></path>

        <path
          d={
            "M52.5 55.5c-.6 0-1-.4-1-1v-16c0-.6.4-1 1-1s1 .4 1 1v16c0 .6-.4 1-1 1zm-6 0c-.6 0-1-.4-1-1v-13c0-.6.4-1 1-1s1 .4 1 1v13c0 .6-.4 1-1 1zm-6 1c-.6 0-1-.4-1-1v-10c0-.6.4-1 1-1s1 .4 1 1v10c0 .6-.4 1-1 1zm-5 0c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1zM21.4 26.6h-.1c-.3 0-.6-.2-.8-.5l-2-3.4c-.3-.5-.1-1.1.4-1.4.5-.3 1.1-.1 1.4.4l1.3 2.2 3.7-4c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4.6 5c-.3.3-.5.4-.8.4zm31.1-2.1h-24c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1zM21.4 40.4h-.1c-.3 0-.6-.2-.8-.5l-2-3.4c-.3-.5-.1-1.1.4-1.4.5-.3 1.1-.1 1.4.4l1.3 2.2 3.7-4c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4.6 5c-.3.3-.5.4-.8.4zm19.1-1.9h-12c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default ApoiaseIconManagerIcon;
/* prettier-ignore-end */
