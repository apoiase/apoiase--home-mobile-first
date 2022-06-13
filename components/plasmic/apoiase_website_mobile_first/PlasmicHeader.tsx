// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bFry1ML5XR1ujHJJdSKVcs
// Component: 8bUxs9HK1VH
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
import BrandLogo from "../../BrandLogo"; // plasmic-import: sbVZc9YGdxY/component
import NavLink from "../../NavLink"; // plasmic-import: 7Z-ceKtKnNu/component
import NavDropdown from "../../NavDropdown"; // plasmic-import: x9X922RIm9H/component
import Button from "../../Button"; // plasmic-import: BHBrHqJAQNB/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_apoiase_website_mobile_first.module.css"; // plasmic-import: bFry1ML5XR1ujHJJdSKVcs/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: 8bUxs9HK1VH/css

import ApoiaseIconArrowDownIcon from "./icons/PlasmicIcon__ApoiaseIconArrowDown"; // plasmic-import: OHY0sRndsmu/icon
import ApoiaseIconCheckIcon from "./icons/PlasmicIcon__ApoiaseIconCheck"; // plasmic-import: qkXlJZBOrBce/icon
import ApoiaseIconArrowRightIcon from "./icons/PlasmicIcon__ApoiaseIconArrowRight"; // plasmic-import: 4yLICZYVLiB-/icon
import ApoiaseIconBurguerIcon from "./icons/PlasmicIcon__ApoiaseIconBurguer"; // plasmic-import: VJ8-XAyWRsqQ/icon

export type PlasmicHeader__VariantMembers = {
  size: "medium" | "small";
  withCta: "withCta";
  opennedModalities: "opennedModalities";
};

export type PlasmicHeader__VariantsArgs = {
  size?: SingleChoiceArg<"medium" | "small">;
  withCta?: SingleBooleanChoiceArg<"withCta">;
  opennedModalities?: SingleBooleanChoiceArg<"opennedModalities">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "size",
  "withCta",
  "opennedModalities"
);

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  header?: p.Flex<"header">;
  navContainer?: p.Flex<"div">;
  brandLogo?: p.Flex<typeof BrandLogo>;
  endIcon?: p.Flex<"svg">;
  navDropdown?: p.Flex<typeof NavDropdown>;
  text?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  apoiaseIconBurguer?: p.Flex<"svg">;
};

export interface DefaultHeaderProps {
  size?: SingleChoiceArg<"medium" | "small">;
  withCta?: SingleBooleanChoiceArg<"withCta">;
  opennedModalities?: SingleBooleanChoiceArg<"opennedModalities">;
  className?: string;
}

export const defaultHeader__Args: Partial<PlasmicHeader__ArgsType> = {};

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHeader__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    true ? (
      <p.Stack
        as={"header"}
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.header,
          {
            [sty.headersize_medium]: hasVariant(variants, "size", "medium"),
            [sty.headersize_small]: hasVariant(variants, "size", "small")
          }
        )}
      >
        <div
          data-plasmic-name={"navContainer"}
          data-plasmic-override={overrides.navContainer}
          className={classNames(projectcss.all, sty.navContainer)}
        >
          {true ? (
            <p.Stack
              as={"nav"}
              hasGap={true}
              className={classNames(projectcss.all, sty.nav___3UbhD)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___8OWxt
                )}
                component={Link}
                platform={"nextjs"}
                target={undefined}
              >
                <BrandLogo
                  data-plasmic-name={"brandLogo"}
                  data-plasmic-override={overrides.brandLogo}
                  className={classNames("__wab_instance", sty.brandLogo)}
                />
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__hwSEc
                )}
                component={Link}
                platform={"nextjs"}
                title={"" as const}
              >
                <NavLink
                  className={classNames("__wab_instance", sty.navLink__jeEl, {
                    [sty.navLinkopennedModalities__jeEl2Z40O]: hasVariant(
                      variants,
                      "opennedModalities",
                      "opennedModalities"
                    ),
                    [sty.navLinkwithCta__jeEldKyC]: hasVariant(
                      variants,
                      "withCta",
                      "withCta"
                    )
                  })}
                  endIcon={
                    <ApoiaseIconArrowDownIcon
                      data-plasmic-name={"endIcon"}
                      data-plasmic-override={overrides.endIcon}
                      className={classNames(projectcss.all, sty.endIcon, {
                        [sty.endIconwithCta]: hasVariant(
                          variants,
                          "withCta",
                          "withCta"
                        )
                      })}
                      role={"img"}
                    />
                  }
                  withEndIcon={true}
                >
                  {(
                    hasVariant(
                      variants,
                      "opennedModalities",
                      "opennedModalities"
                    )
                      ? true
                      : true
                  ) ? (
                    <NavDropdown
                      data-plasmic-name={"navDropdown"}
                      data-plasmic-override={overrides.navDropdown}
                      className={classNames("__wab_instance", sty.navDropdown, {
                        [sty.navDropdownopennedModalities]: hasVariant(
                          variants,
                          "opennedModalities",
                          "opennedModalities"
                        )
                      })}
                    />
                  ) : null}

                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Modalidades"}
                  </div>
                </NavLink>
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__ss9F9
                )}
                component={Link}
                platform={"nextjs"}
              >
                <NavLink
                  className={classNames("__wab_instance", sty.navLink___80Aol)}
                  withEndIcon={true}
                >
                  {"Aprenda"}
                </NavLink>
              </p.PlasmicLink>
            </p.Stack>
          ) : null}
          {true ? (
            <p.Stack
              as={"nav"}
              hasGap={true}
              className={classNames(projectcss.all, sty.nav___0Zqbs)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__u2Lt1
                )}
                component={Link}
                platform={"nextjs"}
              >
                <NavLink
                  className={classNames("__wab_instance", sty.navLink__ow5N7)}
                >
                  {"Acessar Conta"}
                </NavLink>
              </p.PlasmicLink>

              {(hasVariant(variants, "withCta", "withCta") ? true : true) ? (
                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button, {
                    [sty.buttonwithCta]: hasVariant(
                      variants,
                      "withCta",
                      "withCta"
                    )
                  })}
                  color={"red" as const}
                  size={"minimal" as const}
                >
                  {"Iniciar Campanha"}
                </Button>
              ) : null}
            </p.Stack>
          ) : null}
          {true ? (
            <ApoiaseIconBurguerIcon
              data-plasmic-name={"apoiaseIconBurguer"}
              data-plasmic-override={overrides.apoiaseIconBurguer}
              className={classNames(projectcss.all, sty.apoiaseIconBurguer)}
              role={"img"}
            />
          ) : null}
        </div>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  header: [
    "header",
    "navContainer",
    "brandLogo",
    "endIcon",
    "navDropdown",
    "text",
    "button",
    "apoiaseIconBurguer"
  ],
  navContainer: [
    "navContainer",
    "brandLogo",
    "endIcon",
    "navDropdown",
    "text",
    "button",
    "apoiaseIconBurguer"
  ],
  brandLogo: ["brandLogo"],
  endIcon: ["endIcon"],
  navDropdown: ["navDropdown"],
  text: ["text"],
  button: ["button"],
  apoiaseIconBurguer: ["apoiaseIconBurguer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  header: "header";
  navContainer: "div";
  brandLogo: typeof BrandLogo;
  endIcon: "svg";
  navDropdown: typeof NavDropdown;
  text: "div";
  button: typeof Button;
  apoiaseIconBurguer: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "header") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("header"),
  {
    // Helper components rendering sub-elements
    navContainer: makeNodeComponent("navContainer"),
    brandLogo: makeNodeComponent("brandLogo"),
    endIcon: makeNodeComponent("endIcon"),
    navDropdown: makeNodeComponent("navDropdown"),
    text: makeNodeComponent("text"),
    button: makeNodeComponent("button"),
    apoiaseIconBurguer: makeNodeComponent("apoiaseIconBurguer"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
