// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconMessagesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconMessagesIcon(props: ApoiaseIconMessagesIconProps) {
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
        <path id={"Atu2nfuz1a"} d={"M0 0h82v82H0z"}></path>
      </defs>

      <clipPath id={"Atu2nfuz1b"}>
        <use xlinkHref={"#Atu2nfuz1a"} overflow={"visible"}></use>
      </clipPath>

      <g clipPath={"url(#Atu2nfuz1b)"} fill={"currentColor"}>
        <path
          d={
            "M3.3 52.5c-.1 0-.3 0-.4-.1-.4-.2-.6-.5-.6-.9 0 0-.1-9.5-.1-11V18.3c0-3.2 2.7-5.8 6.1-5.8h53c3.3 0 6.1 2.6 6.1 5.8v22.2c0 3.2-2.7 5.8-6.1 5.8H11.5c-.9.3-4.5 3.3-7.5 5.9-.2.2-.4.3-.7.3zm5-38c-2.2 0-4.1 1.7-4.1 3.8v22.2c0 1 0 5.9.1 8.8 3.8-3.3 6.1-5 7.1-5h49.9c2.2 0 4.1-1.7 4.1-3.8V18.3c0-2.1-1.8-3.8-4.1-3.8h-53z"
          }
        ></path>

        <path
          d={
            "M49.3 40.2H20.8c-.6 0-1-.4-1-1V19c0-.6.4-1 1-1h28.5c.6 0 1 .4 1 1v20.2c0 .6-.4 1-1 1zm-27.5-2h26.5V20H21.8v18.2z"
          }
        ></path>

        <path
          d={
            "M45.4 35.5H24.3c-.4 0-.7-.2-.9-.5-.2-.3-.2-.7 0-1L30 22.7c.2-.3.5-.5.8-.5.4 0 .7.1.9.4l4.1 5.9 2-1.7c.4-.3 1-.3 1.4.1l6.9 6.9c.3.3.4.7.2 1.1-.1.4-.5.6-.9.6zm-19.3-2H43L38.5 29l-2.1 1.8c-.2.2-.5.3-.8.2-.3 0-.5-.2-.7-.4L31 25.1l-4.9 8.4zm52.7 40c-.3 0-.5-.1-.7-.3-2.3-2.3-5.2-4.9-6-5.1H55.2c-3.1 0-5.6-2.2-5.6-4.8v-9c0-2.7 2.5-4.8 5.6-4.8h19c3.1 0 5.6 2.2 5.6 4.8v18.2c0 .4-.2.8-.6.9-.2.1-.3.1-.4.1zm-23.6-22c-2 0-3.6 1.3-3.6 2.8v9c0 1.5 1.6 2.8 3.6 2.8h16.9c1.2 0 3.7 2.1 5.7 4V54.3c0-1.5-1.6-2.8-3.6-2.8h-19zm16.9 16.6z"
          }
        ></path>

        <path
          d={
            "M61.6 64.7c-.2 0-.5-.1-.7-.3L57 60.5c-1.1-1.2-1.4-3-.6-4.3.7-1.1 2.1-1.8 3.4-1.7.7 0 1.3.3 1.8.7.5-.4 1.1-.7 1.8-.7 1.3-.1 2.7.6 3.4 1.7.8 1.4.6 3.2-.6 4.3l-3.8 3.8-.1.1c-.2.2-.5.3-.7.3zm-2.1-8.3c-.6 0-1.2.3-1.5.8-.3.5-.3 1.3.3 1.9 1.1 1.2 2.1 2.2 3.2 3.2 1.1-1.1 2.1-2 3.2-3.2.6-.6.6-1.4.3-1.9s-1-.8-1.5-.8c-.4 0-.8.3-1 .7 0 .1-.1.1-.1.2-.2.3-.5.5-.8.5-.3 0-.7-.2-.8-.5 0-.1-.1-.1-.1-.2-.3-.4-.7-.6-1.2-.7.1 0 0 0 0 0zM43.2 28c-1.7 0-3.2-1.4-3.2-3.1s1.4-3.1 3.2-3.1 3.2 1.4 3.2 3.1S45 28 43.2 28zm0-4.1c-.6 0-1.2.5-1.2 1.1s.5 1.1 1.2 1.1 1.2-.5 1.2-1.1-.5-1.1-1.2-1.1z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default ApoiaseIconMessagesIcon;
/* prettier-ignore-end */
