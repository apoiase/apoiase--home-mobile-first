// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApoiaseIconMyPledgeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApoiaseIconMyPledgeIcon(props: ApoiaseIconMyPledgeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M12.081 10.851c0-2.765 2.164-4.988 4.935-4.988 1.085 0 2.128.356 2.984.961a5.192 5.192 0 012.985-.96c2.77 0 4.934 2.222 4.934 4.987 0 1.689-.76 3.124-1.84 4.463-1.05 1.302-2.523 2.658-4.177 4.18l-.067.062-1.832 1.692-1.834-1.682-.003-.002-.085-.079c-1.647-1.519-3.115-2.872-4.16-4.17-1.08-1.34-1.84-2.775-1.84-4.464zm4.935-2.415c-1.315 0-2.362 1.035-2.362 2.415 0 .856.368 1.73 1.27 2.85.917 1.138 2.252 2.372 3.985 3.97l.002.001.086.08.092-.086.002-.002c1.733-1.595 3.068-2.827 3.985-3.965.902-1.119 1.27-1.992 1.27-2.848 0-1.38-1.047-2.415-2.361-2.415-.758 0-1.51.364-2 .947L20 10.558l-.985-1.175a2.663 2.663 0 00-2-.947z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.422 17.512a1.286 1.286 0 010 1.82l-3.455 3.455h6.688c1.16 0 2.273.46 3.093 1.28L20 26.32l2.252-2.252a4.374 4.374 0 013.093-1.281h6.688l-3.455-3.455a1.286 1.286 0 111.82-1.82l4.622 4.623a3.345 3.345 0 01.655 3.804l-2.997 6.29a3.345 3.345 0 01-3.02 1.906H10.342a3.345 3.345 0 01-3.02-1.906l-2.997-6.29a3.345 3.345 0 01.655-3.804l4.623-4.623a1.286 1.286 0 011.82 0zm21.679 7.847h-7.756c-.478 0-.936.19-1.274.528l-2.434 2.434a2.316 2.316 0 01-3.274 0l-2.434-2.434a1.801 1.801 0 00-1.274-.528H6.9l2.746 5.763c.128.269.399.44.697.44h19.316a.772.772 0 00.697-.44l2.746-5.763z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ApoiaseIconMyPledgeIcon;
/* prettier-ignore-end */
