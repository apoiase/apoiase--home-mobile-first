// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIllustrationLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIllustrationLineIcon(
  props: ApoiaseIllustrationLineIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 831 108"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M675.275 103.854c-8.398-.16-18.604-.353-31.275-.353H2a1.5 1.5 0 100 3h642c12.64 0 22.815.193 31.212.352 1.723.033 3.372.064 4.951.092 9.255.164 16.197.213 21.925-.263 5.759-.479 10.341-1.492 14.891-3.471 4.527-1.969 8.953-4.866 14.427-9.015 3.564-2.702 14.009-12.016 31.094-27.318l5.376-4.815c16.622-14.89 38.691-34.66 66.118-58.94a1.5 1.5 0 10-1.988-2.246c-27.439 24.29-49.516 44.068-66.14 58.959l-5.367 4.807c-17.164 15.372-27.469 24.558-30.905 27.162-5.409 4.1-9.611 6.828-13.812 8.655-4.178 1.818-8.423 2.773-13.943 3.232-5.552.462-12.342.418-21.623.254-1.575-.028-3.22-.059-4.941-.092z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M705 72.5c-6.351 0-11.5 5.149-11.5 11.5s5.149 11.5 11.5 11.5 11.5-5.149 11.5-11.5-5.149-11.5-11.5-11.5zM690.5 84c0-8.008 6.492-14.5 14.5-14.5s14.5 6.492 14.5 14.5-6.492 14.5-14.5 14.5-14.5-6.492-14.5-14.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIllustrationLineIcon;
/* prettier-ignore-end */
