// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconStarSmallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconStarSmallIcon(props: ApoiaseIconStarSmallIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M11.51 18.906a.939.939 0 01.98 0l4.814 2.953c.709.435 1.591-.2 1.405-1.01l-1.288-5.612a.939.939 0 01.295-.914l4.302-3.788c.62-.546.283-1.568-.54-1.64l-5.633-.485a.939.939 0 01-.786-.574l-2.193-5.259c-.32-.77-1.411-.77-1.732 0L8.94 7.836a.939.939 0 01-.786.574l-5.634.486c-.823.07-1.16 1.093-.54 1.64l4.303 3.787a.939.939 0 01.294.914L5.29 20.85c-.186.81.697 1.445 1.406 1.01l4.813-2.953z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconStarSmallIcon;
/* prettier-ignore-end */
