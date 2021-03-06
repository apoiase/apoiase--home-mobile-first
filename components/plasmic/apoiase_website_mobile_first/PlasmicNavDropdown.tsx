// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bFry1ML5XR1ujHJJdSKVcs
// Component: x9X922RIm9H
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavLink from "../../NavLink"; // plasmic-import: 7Z-ceKtKnNu/component
import Button from "../../Button"; // plasmic-import: BHBrHqJAQNB/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_apoiase_website_mobile_first.module.css"; // plasmic-import: bFry1ML5XR1ujHJJdSKVcs/projectcss
import sty from "./PlasmicNavDropdown.module.css"; // plasmic-import: x9X922RIm9H/css

import ApoiaseIconArrowDownIcon from "./icons/PlasmicIcon__ApoiaseIconArrowDown"; // plasmic-import: OHY0sRndsmu/icon
import ApoiaseIconProfileIcon from "./icons/PlasmicIcon__ApoiaseIconProfile"; // plasmic-import: Y2bQgOuUy8z/icon
import ApoiaseIconHeartUnselectedIcon from "./icons/PlasmicIcon__ApoiaseIconHeartUnselected"; // plasmic-import: mt3Fd7Zx_kA/icon
import ApoiaseIconMyPledgeIcon from "./icons/PlasmicIcon__ApoiaseIconMyPledge"; // plasmic-import: jl53ngLG8wG/icon
import ApoiaseIconCardIcon from "./icons/PlasmicIcon__ApoiaseIconCard"; // plasmic-import: lT9E4hy6GF1/icon
import ApoiaseIconCheckIcon from "./icons/PlasmicIcon__ApoiaseIconCheck"; // plasmic-import: qkXlJZBOrBce/icon
import ApoiaseIconArrowRightIcon from "./icons/PlasmicIcon__ApoiaseIconArrowRight"; // plasmic-import: 4yLICZYVLiB-/icon

export type PlasmicNavDropdown__VariantMembers = {
  withIcon: "withIcon";
  withButton: "withButton";
};

export type PlasmicNavDropdown__VariantsArgs = {
  withIcon?: SingleBooleanChoiceArg<"withIcon">;
  withButton?: SingleBooleanChoiceArg<"withButton">;
};

type VariantPropType = keyof PlasmicNavDropdown__VariantsArgs;
export const PlasmicNavDropdown__VariantProps = new Array<VariantPropType>(
  "withIcon",
  "withButton"
);

export type PlasmicNavDropdown__ArgsType = {};
type ArgPropType = keyof PlasmicNavDropdown__ArgsType;
export const PlasmicNavDropdown__ArgProps = new Array<ArgPropType>();

export type PlasmicNavDropdown__OverridesType = {
  navDropdown?: p.Flex<"div">;
  withLinks?: p.Flex<"div">;
  startIcon2?: p.Flex<"svg">;
  endIcon2?: p.Flex<"svg">;
  separator?: p.Flex<"div">;
  withButton?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
};

export interface DefaultNavDropdownProps {
  withIcon?: SingleBooleanChoiceArg<"withIcon">;
  withButton?: SingleBooleanChoiceArg<"withButton">;
  className?: string;
}

export const defaultNavDropdown__Args: Partial<PlasmicNavDropdown__ArgsType> =
  {};

function PlasmicNavDropdown__RenderFunc(props: {
  variants: PlasmicNavDropdown__VariantsArgs;
  args: PlasmicNavDropdown__ArgsType;
  overrides: PlasmicNavDropdown__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultNavDropdown__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"navDropdown"}
      data-plasmic-override={overrides.navDropdown}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.navDropdown,
        {
          [sty.navDropdownwithButton]: hasVariant(
            variants,
            "withButton",
            "withButton"
          )
        }
      )}
    >
      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"withLinks"}
          data-plasmic-override={overrides.withLinks}
          hasGap={true}
          className={classNames(projectcss.all, sty.withLinks, {
            [sty.withLinkswithIcon]: hasVariant(
              variants,
              "withIcon",
              "withIcon"
            )
          })}
        >
          <NavLink
            className={classNames("__wab_instance", sty.navLink__sdLj, {
              [sty.navLinkwithButton__sdLjv9Vgn]: hasVariant(
                variants,
                "withButton",
                "withButton"
              ),
              [sty.navLinkwithIcon__sdLjYPwUs]: hasVariant(
                variants,
                "withIcon",
                "withIcon"
              )
            })}
            startIcon={
              <p.PlasmicIcon
                PlasmicIconType={
                  hasVariant(variants, "withButton", "withButton")
                    ? ApoiaseIconProfileIcon
                    : ApoiaseIconArrowDownIcon
                }
                className={classNames(projectcss.all, sty.svg__jvUtn, {
                  [sty.svgwithButton__jvUtnv9Vgn]: hasVariant(
                    variants,
                    "withButton",
                    "withButton"
                  )
                })}
                role={"img"}
              />
            }
            withEndIcon={
              hasVariant(variants, "withIcon", "withIcon") ? true : undefined
            }
            withSecondLevel={true}
            withStartIcon={
              hasVariant(variants, "withButton", "withButton")
                ? true
                : undefined
            }
          />

          <NavLink
            className={classNames("__wab_instance", sty.navLink__fnLik, {
              [sty.navLinkwithButton__fnLikv9Vgn]: hasVariant(
                variants,
                "withButton",
                "withButton"
              ),
              [sty.navLinkwithIcon__fnLikYPwUs]: hasVariant(
                variants,
                "withIcon",
                "withIcon"
              )
            })}
            startIcon={
              <p.PlasmicIcon
                PlasmicIconType={
                  hasVariant(variants, "withButton", "withButton")
                    ? ApoiaseIconHeartUnselectedIcon
                    : hasVariant(variants, "withIcon", "withIcon")
                    ? ApoiaseIconArrowDownIcon
                    : "div"
                }
                className={classNames(projectcss.all, sty.svg__zYusq, {
                  [sty.svgwithButton__zYusqv9Vgn]: hasVariant(
                    variants,
                    "withButton",
                    "withButton"
                  ),
                  [sty.svgwithIcon__zYusqYPwUs]: hasVariant(
                    variants,
                    "withIcon",
                    "withIcon"
                  )
                })}
                role={"img"}
              />
            }
            withEndIcon={
              hasVariant(variants, "withIcon", "withIcon") ? true : undefined
            }
            withSecondLevel={true}
            withStartIcon={
              hasVariant(variants, "withButton", "withButton")
                ? true
                : undefined
            }
          />

          <NavLink
            className={classNames("__wab_instance", sty.navLink__i94Q8, {
              [sty.navLinkwithButton__i94Q8V9Vgn]: hasVariant(
                variants,
                "withButton",
                "withButton"
              ),
              [sty.navLinkwithIcon__i94Q8YPwUs]: hasVariant(
                variants,
                "withIcon",
                "withIcon"
              )
            })}
            startIcon={
              <p.PlasmicIcon
                PlasmicIconType={
                  hasVariant(variants, "withButton", "withButton")
                    ? ApoiaseIconMyPledgeIcon
                    : ApoiaseIconArrowDownIcon
                }
                className={classNames(projectcss.all, sty.svg__bX4My, {
                  [sty.svgwithButton__bX4Myv9Vgn]: hasVariant(
                    variants,
                    "withButton",
                    "withButton"
                  ),
                  [sty.svgwithIcon__bX4MyYPwUs]: hasVariant(
                    variants,
                    "withIcon",
                    "withIcon"
                  )
                })}
                role={"img"}
              />
            }
            withEndIcon={
              hasVariant(variants, "withIcon", "withIcon") ? true : undefined
            }
            withSecondLevel={true}
            withStartIcon={
              hasVariant(variants, "withButton", "withButton")
                ? true
                : undefined
            }
          />

          {(hasVariant(variants, "withButton", "withButton") ? true : false) ? (
            <NavLink
              className={classNames("__wab_instance", sty.navLink___3Eadp, {
                [sty.navLinkwithButton___3Eadpv9Vgn]: hasVariant(
                  variants,
                  "withButton",
                  "withButton"
                ),
                [sty.navLinkwithIcon___3EadpYPwUs]: hasVariant(
                  variants,
                  "withIcon",
                  "withIcon"
                )
              })}
              endIcon={
                <ApoiaseIconArrowDownIcon
                  data-plasmic-name={"endIcon2"}
                  data-plasmic-override={overrides.endIcon2}
                  className={classNames(projectcss.all, sty.endIcon2)}
                  role={"img"}
                />
              }
              startIcon={
                <p.PlasmicIcon
                  data-plasmic-name={"startIcon2"}
                  data-plasmic-override={overrides.startIcon2}
                  PlasmicIconType={
                    hasVariant(variants, "withButton", "withButton")
                      ? ApoiaseIconCardIcon
                      : ApoiaseIconArrowDownIcon
                  }
                  className={classNames(projectcss.all, sty.startIcon2, {
                    [sty.startIcon2withButton]: hasVariant(
                      variants,
                      "withButton",
                      "withButton"
                    ),
                    [sty.startIcon2withIcon]: hasVariant(
                      variants,
                      "withIcon",
                      "withIcon"
                    )
                  })}
                  role={"img"}
                />
              }
              withEndIcon={
                hasVariant(variants, "withIcon", "withIcon") ? true : undefined
              }
              withSecondLevel={true}
              withStartIcon={
                hasVariant(variants, "withButton", "withButton")
                  ? true
                  : undefined
              }
            />
          ) : null}
        </p.Stack>
      ) : null}
      {(
        hasVariant(variants, "withButton", "withButton")
          ? true
          : hasVariant(variants, "withIcon", "withIcon")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"separator"}
          data-plasmic-override={overrides.separator}
          className={classNames(projectcss.all, sty.separator, {
            [sty.separatorwithButton]: hasVariant(
              variants,
              "withButton",
              "withButton"
            ),
            [sty.separatorwithIcon]: hasVariant(
              variants,
              "withIcon",
              "withIcon"
            )
          })}
        />
      ) : null}
      {(
        hasVariant(variants, "withButton", "withButton")
          ? true
          : hasVariant(variants, "withIcon", "withIcon")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"withButton"}
          data-plasmic-override={overrides.withButton}
          className={classNames(projectcss.all, sty.withButton, {
            [sty.withButtonwithButton]: hasVariant(
              variants,
              "withButton",
              "withButton"
            ),
            [sty.withButtonwithIcon]: hasVariant(
              variants,
              "withIcon",
              "withIcon"
            )
          })}
        >
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"white" as const}
            size={"minimal" as const}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Sair"}
            </div>
          </Button>
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  navDropdown: [
    "navDropdown",
    "withLinks",
    "startIcon2",
    "endIcon2",
    "separator",
    "withButton",
    "button",
    "text"
  ],
  withLinks: ["withLinks", "startIcon2", "endIcon2"],
  startIcon2: ["startIcon2"],
  endIcon2: ["endIcon2"],
  separator: ["separator"],
  withButton: ["withButton", "button", "text"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  navDropdown: "div";
  withLinks: "div";
  startIcon2: "svg";
  endIcon2: "svg";
  separator: "div";
  withButton: "div";
  button: typeof Button;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavDropdown__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavDropdown__VariantsArgs;
    args?: PlasmicNavDropdown__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavDropdown__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavDropdown__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavDropdown__ArgProps,
      internalVariantPropNames: PlasmicNavDropdown__VariantProps
    });

    return PlasmicNavDropdown__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "navDropdown") {
    func.displayName = "PlasmicNavDropdown";
  } else {
    func.displayName = `PlasmicNavDropdown.${nodeName}`;
  }
  return func;
}

export const PlasmicNavDropdown = Object.assign(
  // Top-level PlasmicNavDropdown renders the root element
  makeNodeComponent("navDropdown"),
  {
    // Helper components rendering sub-elements
    withLinks: makeNodeComponent("withLinks"),
    startIcon2: makeNodeComponent("startIcon2"),
    endIcon2: makeNodeComponent("endIcon2"),
    separator: makeNodeComponent("separator"),
    withButton: makeNodeComponent("withButton"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicNavDropdown
    internalVariantProps: PlasmicNavDropdown__VariantProps,
    internalArgProps: PlasmicNavDropdown__ArgProps
  }
);

export default PlasmicNavDropdown;
/* prettier-ignore-end */
