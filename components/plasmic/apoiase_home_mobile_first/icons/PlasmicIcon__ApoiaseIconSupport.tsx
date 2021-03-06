// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconSupportIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconSupportIcon(props: ApoiaseIconSupportIconProps) {
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
        <path id={"awEO1tSM3a"} d={"M0 0h82v82H0z"}></path>
      </defs>

      <clipPath id={"awEO1tSM3b"}>
        <use xlinkHref={"#awEO1tSM3a"} overflow={"visible"}></use>
      </clipPath>

      <g clipPath={"url(#awEO1tSM3b)"} fill={"currentColor"}>
        <path
          d={
            "M30.6 65.6c-3.1 0-5.3-.9-6-1.2h-1.1c-5.5 0-9.9-4.5-9.9-10V42.9c0-.6.4-1 1-1s1 .4 1 1v11.5c0 4.4 3.6 8 7.9 8h1.3c.2 0 .3 0 .5.1 0 0 2 1.1 5.3 1.1 3.6 0 4.8-1 4.8-1 .2-.2.4-.3.7-.3h1.3c4.4 0 7.9-3.6 7.9-8V42.9c0-.6.4-1 1-1s1 .4 1 1v11.5c0 5.5-4.5 10-9.9 10h-1c-.6.4-2.3 1.2-5.8 1.2z"
          }
        ></path>

        <path
          d={
            "M31 57.3c-1.2 0-2.4-.2-3.3-.5-1.8-.6-2-1.6-2-2.2 0-.6.4-1 1-1 .5 0 1 .4 1 1 .2.3 1.4.7 3.3.7 2 0 3.2-.5 3.3-.7 0-.6.4-1 1-1s1 .5 1 1c0 2-2.8 2.7-5.3 2.7zm-3.3-2.7zm5.4-2.2H28c-.6 0-1-.4-1-1v-5.9c0-.8-.5-3-2.3-3h-5.4c-.6 0-1-.4-1-1s.4-1 1-1h5.4c2.9 0 4.3 3 4.3 5v4.9h4.1c.6 0 1 .4 1 1s-.4 1-1 1z"
          }
        ></path>

        <circle cx={"23.5"} cy={"46.4"} r={"1.5"}></circle>

        <path
          d={
            "M34.6 43.9c-.3 0-.6-.1-.8-.4-.4-.4-.3-1 .1-1.4.1-.1 3-2.5 8.3-1.7.5.1.9.6.8 1.1-.1.5-.6.9-1.1.8-4.4-.6-6.7 1.2-6.8 1.2-.1.3-.3.4-.5.4zM31 72.6c-7.4 0-10.7-4.8-10.7-9.3 0-.6.4-1 1-1s1 .4 1 1c0 3.6 2.7 7.3 8.7 7.3 6.2 0 7.5-5.4 7.5-7.3 0-.6.4-1 1-1s1 .4 1 1c0 3.6-2.6 9.3-9.5 9.3z"
          }
        ></path>

        <path
          d={
            "M47.6 43.9c-.1 0-.2 0-.4-.1s-3.7-1.5-5.4-4.6c-.7-1.4-.8-2.5-.8-3.3-2 .4-5.2.6-7.4-1.2-.8.6-2.1 1.4-3.5 1.4-.7 0-1.3-.2-1.8-.6-1 .8-2.8 2-5 1.9-1.4-.1-2.7-.6-4-1.6-.2 2.3-1.2 5.6-4.7 7.9-.5.3-1.1.2-1.4-.3-.3-.5-.2-1.1.3-1.4 4.6-3.1 3.8-8.4 3.8-8.6-.1-.4.2-.9.6-1.1.4-.2.9-.1 1.2.3 1.3 1.7 2.8 2.6 4.2 2.7 2.3.1 4.2-1.7 4.2-1.7.2-.2.5-.2.7-.2.3 0 .6-.1.7.2.3.4.7.5 1.2.5 1.1 0 2.4-1.1 2.8-1.5.2-.2.5-.3.8-.3.3 0 .5.1.7.4 2.2 2.7 7.8.8 7.8.7.4-.2.9 0 1.2.4s.2.9-.1 1.2c0 0-.9 1 .2 3.2 1.3 2.5 4.3 3.7 4.3 3.7.5.2.8.8.6 1.3-.1.4-.4.7-.8.7z"
          }
        ></path>

        <path
          d={
            "M20 66.3c-.1 0-.3 0-.4-.1-.8-.3-1.5-.8-2.2-1.2-.3-.2-.7-.4-1-.6-.7-.4-1.3-1-1.8-1.5-.3-.3-.7-.7-1-.9-.3-.2-.8-.4-1.3-.5-.7-.2-1.6-.5-2.2-1.1-1-1-1.8-2-2.5-2.9-.5-.7-.8-1.5-1-2.2-.2-.5-.3-1-.5-1.4-.6-1.1-1.2-2.1-1.8-3.3-.2-.4-.5-.8-.8-1.2-.4-.6-1-1.3-1.2-2.2-.2-.9 0-1.8.2-2.6.2-.5.3-1 .2-1.4v-.3c-.1-1.1-.3-2.2-.3-3.4 0-.3-.4-.9-.7-1.3-.5-.8-1.1-1.7-1-2.7.1-.9.6-1.7 1-2.3.3-.5.6-.9.7-1.3.1-.4.1-1 .1-1.5 0-.8 0-1.7.4-2.5.4-.9 1.3-1.4 2.2-1.8.5-.2 1-.5 1.2-.8.2-.4.4-.8.5-1.3.2-.7.5-1.5 1-2.2.5-.7 1.2-1.1 1.9-1.5.4-.3.8-.5 1.1-.8.2-.2.4-.8.6-1.3.3-.8.6-1.7 1.3-2.3.7-.5 1.5-.7 2.2-.9.5-.1 1-.2 1.4-.4.3-.2.7-.6 1.1-1 .5-.6 1.1-1.2 1.9-1.6.8-.3 1.6-.3 2.4-.3.5 0 1 0 1.4-.1.8-.2 1.6-.3 2.4-.3.4 0 .9 0 1.3-.1.4 0 .7-.1 1.1-.2.8-.1 1.7-.3 2.6-.3.3 0 .8-.3 1.3-.5.7-.4 1.6-.9 2.5-.7 1 .1 1.7 1 2.3 1.7.3.4.8.9 1 1 1 .3 1.8.6 2.6 1 .3.1.5.2.8.3.4.2.8.3 1.1.4.7.3 1.5.5 2.3 1l.6.4c.9.5 1.7.9 2.5 1.6.2.2.9.2 1.4.2.9 0 2 .1 2.7.8.6.6 1.1 1.4 1.6 2.1.3.4.5.8.8 1.1.5.7.8 1.6.9 2.4.1.6.2 1.1.5 1.4.2.3.4.7.6 1 .5.7 1 1.5 1.3 2.3.4.9.6 1.8.8 2.6.1.4.2.7.3 1.1.1.4.4.8.7 1.3.5.7 1 1.4 1.1 2.4.2 1.6.3 2.9.3 4 0 1-.6 1.8-1 2.5-.3.5-.6.9-.7 1.3-.1 1.1-.3 2.4-.7 3.7-.2.8-.6 1.5-1 2.2-.2.4-.5.8-.6 1.2-.2.4-.2.9-.3 1.4-.1.7-.2 1.6-.7 2.3l-.6 1.2c-.4.7-.7 1.5-1.3 2.2-.3.4-.5.8-.8 1.3-.4.7-.8 1.5-1.4 2.1-.7.7-1.8.8-2.7.8-.5 0-1.1.1-1.4.2-.3.2-.5.4-.8.6-.7.5-1.4 1.1-2.2 1.6-.3.2-.6.4-.9.5-.7.4-1.5.9-2.3 1.2-.5.2-1.1 0-1.3-.5-.2-.5 0-1.1.5-1.3.7-.3 1.4-.7 2-1.1.3-.2.6-.4 1-.6.7-.4 1.3-.9 2-1.4.3-.2.5-.4.8-.6.7-.5 1.6-.6 2.5-.6.5 0 1.2-.1 1.4-.2.4-.4.7-1 1-1.6.3-.5.6-1.1 1-1.6s.7-1.2 1.1-1.8c.2-.4.4-.9.7-1.3.2-.4.3-1 .4-1.6.1-.6.2-1.3.5-1.9.2-.5.5-1 .7-1.4.3-.6.6-1.1.8-1.7.3-1.3.5-2.5.7-3.5.1-.8.6-1.5 1-2.1.3-.5.7-1 .7-1.4 0-1-.1-2.2-.3-3.7-.1-.4-.4-1-.8-1.5-.4-.6-.8-1.2-1-1.9l-.3-1.2c-.2-.8-.4-1.6-.7-2.3-.3-.7-.7-1.4-1.2-2-.2-.3-.4-.7-.7-1.1-.4-.6-.5-1.3-.7-2-.1-.6-.3-1.2-.6-1.6l-.9-1.2c-.4-.6-.9-1.3-1.3-1.8-.2-.2-.9-.2-1.4-.2-.8 0-1.8-.1-2.5-.6s-1.5-1-2.3-1.4l-.7-.4c-.6-.3-1.2-.6-1.9-.8-.4-.1-.8-.3-1.2-.5-.3-.1-.5-.2-.8-.3-.8-.3-1.5-.6-2.3-.9-.9-.2-1.5-1-2-1.6-.3-.4-.8-1-1-1-.3 0-.8.3-1.3.5-.7.4-1.4.8-2.3.8-.8 0-1.5.1-2.3.2-.4.1-.7.1-1.1.2-.5.1-1 .1-1.5.1-.7 0-1.3.1-1.9.2-.7.2-1.3.2-2 .2-.6 0-1.2 0-1.6.2-.4.2-.8.6-1.2 1.1-.5.5-.9 1-1.5 1.3-.6.3-1.3.5-1.9.7-.6.1-1.1.3-1.5.5-.3.2-.5.8-.6 1.3-.2.7-.5 1.5-1.1 2.1-.5.5-1 .8-1.5 1.1-.5.3-1 .6-1.3 1-.3.4-.5 1-.7 1.6-.2.6-.4 1.2-.7 1.7-.5.8-1.3 1.2-2 1.5-.5.2-1.1.5-1.2.8-.2.4-.2 1.1-.2 1.7 0 .7 0 1.3-.2 2s-.5 1.3-.9 1.8c-.3.6-.7 1.1-.7 1.6 0 .3.4.9.6 1.3.5.7 1 1.5 1 2.4 0 1.1.1 2.1.3 3.2v.3c.1.8-.1 1.6-.3 2.2-.2.6-.3 1.1-.2 1.5.1.5.5 1 .9 1.5s.7 1 1 1.6c.5 1.1 1 2 1.6 3.1.4.6.5 1.2.7 1.8.2.6.4 1.2.7 1.6.7.8 1.4 1.8 2.3 2.7.3.3.8.4 1.4.6.6.2 1.3.4 1.9.8.5.3.8.7 1.2 1.1.5.5.9.9 1.4 1.2.4.2.8.5 1.1.7.6.4 1.2.8 1.9 1.1.5.2.8.8.5 1.3 0 .2-.4.4-.8.4z"
          }
        ></path>

        <path
          d={
            "M35.3 46.7c-.3 0-.6-.2-.8-.4-.3-.5-.2-1.1.3-1.4 1.3-.9 4.3-1.9 5.9.2.3.4.3 1.1-.2 1.4-.4.3-1.1.3-1.4-.2-1-1.2-3.2.2-3.3.2-.2.1-.4.2-.5.2zm33.8 22.6c-3.1 0-6-1.2-8.3-3.4l-9.6-3.7 6.2-2.6c-.2-.9-.3-1.9-.3-2.8 0-6.9 5.4-12.5 12-12.5s12 5.6 12 12.5-5.3 12.5-12 12.5zm-12.5-7.2l5.3 2 .2.2c1.9 1.9 4.4 3 7 3 5.5 0 10-4.7 10-10.5s-4.5-10.5-10-10.5-10 4.7-10 10.5c0 1.1.2 2.1.5 3.1l.3.9-3.3 1.3z"
          }
        ></path>

        <path
          d={
            "M67.9 57.6l-.6-7.1h3.2l-.1 1.1c-.2 2.1-.5 5.6-.5 5.9l-2 .1zm-.6 1.1h2.8v2.8h-2.8z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default ApoiaseIconSupportIcon;
/* prettier-ignore-end */
