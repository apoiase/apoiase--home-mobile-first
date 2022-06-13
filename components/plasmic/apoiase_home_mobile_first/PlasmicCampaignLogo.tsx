// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uHRmC1SQrkfdMqVjfGKf9u
// Component: P3nA8obphdgioX
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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_blank_project_mobile_first_css from "../apoiase_website_mobile_first/plasmic_apoiase_website_mobile_first.module.css"; // plasmic-import: bFry1ML5XR1ujHJJdSKVcs/projectcss
import projectcss from "./plasmic_apoiase_home_mobile_first.module.css"; // plasmic-import: uHRmC1SQrkfdMqVjfGKf9u/projectcss
import sty from "./PlasmicCampaignLogo.module.css"; // plasmic-import: P3nA8obphdgioX/css

import ApoiaseCampanhaContinuaPorMesIcon from "./icons/PlasmicIcon__ApoiaseCampanhaContinuaPorMes"; // plasmic-import: CsH6p8R0QN-Aqz/icon
import ApoiaseCampanhaPontualMetaLivreIcon from "./icons/PlasmicIcon__ApoiaseCampanhaPontualMetaLivre"; // plasmic-import: ol3Q5welg3E-bE/icon

export type PlasmicCampaignLogo__VariantMembers = {
  pontual: "pontual";
};

export type PlasmicCampaignLogo__VariantsArgs = {
  pontual?: SingleBooleanChoiceArg<"pontual">;
};

type VariantPropType = keyof PlasmicCampaignLogo__VariantsArgs;
export const PlasmicCampaignLogo__VariantProps = new Array<VariantPropType>(
  "pontual"
);

export type PlasmicCampaignLogo__ArgsType = {};
type ArgPropType = keyof PlasmicCampaignLogo__ArgsType;
export const PlasmicCampaignLogo__ArgProps = new Array<ArgPropType>();

export type PlasmicCampaignLogo__OverridesType = {
  campaignLogo?: p.Flex<"div">;
  campaignType?: p.Flex<"svg">;
};

export interface DefaultCampaignLogoProps {
  pontual?: SingleBooleanChoiceArg<"pontual">;
  className?: string;
}

export const defaultCampaignLogo__Args: Partial<PlasmicCampaignLogo__ArgsType> =
  {};

function PlasmicCampaignLogo__RenderFunc(props: {
  variants: PlasmicCampaignLogo__VariantsArgs;
  args: PlasmicCampaignLogo__ArgsType;
  overrides: PlasmicCampaignLogo__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultCampaignLogo__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <div
      data-plasmic-name={"campaignLogo"}
      data-plasmic-override={overrides.campaignLogo}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_blank_project_mobile_first_css.plasmic_tokens,
        sty.campaignLogo,
        {
          [sty.campaignLogopontual]: hasVariant(variants, "pontual", "pontual")
        }
      )}
    >
      {(hasVariant(variants, "pontual", "pontual") ? true : true) ? (
        <p.PlasmicIcon
          data-plasmic-name={"campaignType"}
          data-plasmic-override={overrides.campaignType}
          PlasmicIconType={
            hasVariant(variants, "pontual", "pontual")
              ? ApoiaseCampanhaPontualMetaLivreIcon
              : ApoiaseCampanhaContinuaPorMesIcon
          }
          className={classNames(projectcss.all, sty.campaignType, {
            [sty.campaignTypepontual]: hasVariant(
              variants,
              "pontual",
              "pontual"
            )
          })}
          role={"img"}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  campaignLogo: ["campaignLogo", "campaignType"],
  campaignType: ["campaignType"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  campaignLogo: "div";
  campaignType: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCampaignLogo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCampaignLogo__VariantsArgs;
    args?: PlasmicCampaignLogo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCampaignLogo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCampaignLogo__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCampaignLogo__ArgProps,
      internalVariantPropNames: PlasmicCampaignLogo__VariantProps
    });

    return PlasmicCampaignLogo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "campaignLogo") {
    func.displayName = "PlasmicCampaignLogo";
  } else {
    func.displayName = `PlasmicCampaignLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicCampaignLogo = Object.assign(
  // Top-level PlasmicCampaignLogo renders the root element
  makeNodeComponent("campaignLogo"),
  {
    // Helper components rendering sub-elements
    campaignType: makeNodeComponent("campaignType"),

    // Metadata about props expected for PlasmicCampaignLogo
    internalVariantProps: PlasmicCampaignLogo__VariantProps,
    internalArgProps: PlasmicCampaignLogo__ArgProps
  }
);

export default PlasmicCampaignLogo;
/* prettier-ignore-end */
