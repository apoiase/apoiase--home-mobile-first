// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseCampanhaContinuaSymbolIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ApoiaseCampanhaContinuaSymbolIcon(
  props: ApoiaseCampanhaContinuaSymbolIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 18"}
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
          "M19.927 10.263a19.124 19.124 0 00-.874-.116 8.42 8.42 0 00.737-.786l.223-.269c.932-1.1 1.435-2.852 1.283-4.464a5.045 5.045 0 00-1.856-3.554c-1.046-.838-2.716-1.2-4.358-.948a6.921 6.921 0 00-4.218 2.371.168.168 0 01-.128.058.168.168 0 01-.128-.058A7.03 7.03 0 006.317.081c-1.652-.256-3.353.106-4.398.95a5.071 5.071 0 00-1.892 3.59c-.153 1.622.36 3.386 1.307 4.493 2.03 2.37 8.79 8.341 9.076 8.594l.073.07a.335.335 0 00.457 0l.1-.094c.144-.128 3.514-3.136 6.181-5.715a.61.61 0 00.03-.765.579.579 0 00-.697 0c-2.094 2.009-4.63 4.285-5.712 5.258l-.024.02a.168.168 0 01-.225 0c-2.247-2.005-6.903-6.274-8.445-8.075A5.208 5.208 0 011.102 4.75a4.01 4.01 0 011.481-2.825c.832-.662 2.198-.94 3.566-.729a6.095 6.095 0 014.111 2.67l.156.216a.334.334 0 00.551 0l.153-.231a6.05 6.05 0 014.108-2.68c1.377-.213 2.743.07 3.584.738a4.069 4.069 0 011.481 2.853c.125 1.329-.305 2.816-1.045 3.703l-.19.225a8.63 8.63 0 01-.752.802c0-.305-.024-.592-.046-.884-.021-.293-.436-.274-.417 0 .036.555.052 1.112.073 1.667v.024a.168.168 0 00.15.183c.575.098 1.16.134 1.736.232.278 0 .39-.409.125-.451z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseCampanhaContinuaSymbolIcon;
/* prettier-ignore-end */
