// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bFry1ML5XR1ujHJJdSKVcs
// Component: ymQ_VZgdSMvX
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

import projectcss from "./plasmic_apoiase_website_mobile_first.module.css"; // plasmic-import: bFry1ML5XR1ujHJJdSKVcs/projectcss
import sty from "./PlasmicCampaignAvatar.module.css"; // plasmic-import: ymQ_VZgdSMvX/css

export type PlasmicCampaignAvatar__VariantMembers = {};

export type PlasmicCampaignAvatar__VariantsArgs = {};
type VariantPropType = keyof PlasmicCampaignAvatar__VariantsArgs;
export const PlasmicCampaignAvatar__VariantProps = new Array<VariantPropType>();

export type PlasmicCampaignAvatar__ArgsType = {};
type ArgPropType = keyof PlasmicCampaignAvatar__ArgsType;
export const PlasmicCampaignAvatar__ArgProps = new Array<ArgPropType>();

export type PlasmicCampaignAvatar__OverridesType = {
  campaignAvatar?: p.Flex<"div">;
};

export interface DefaultCampaignAvatarProps {
  className?: string;
}

export const defaultCampaignAvatar__Args: Partial<PlasmicCampaignAvatar__ArgsType> =
  {};

function PlasmicCampaignAvatar__RenderFunc(props: {
  variants: PlasmicCampaignAvatar__VariantsArgs;
  args: PlasmicCampaignAvatar__ArgsType;
  overrides: PlasmicCampaignAvatar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultCampaignAvatar__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    true ? (
      <div
        data-plasmic-name={"campaignAvatar"}
        data-plasmic-override={overrides.campaignAvatar}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.campaignAvatar
        )}
      />
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  campaignAvatar: ["campaignAvatar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  campaignAvatar: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCampaignAvatar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCampaignAvatar__VariantsArgs;
    args?: PlasmicCampaignAvatar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCampaignAvatar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCampaignAvatar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCampaignAvatar__ArgProps,
      internalVariantPropNames: PlasmicCampaignAvatar__VariantProps
    });

    return PlasmicCampaignAvatar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "campaignAvatar") {
    func.displayName = "PlasmicCampaignAvatar";
  } else {
    func.displayName = `PlasmicCampaignAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicCampaignAvatar = Object.assign(
  // Top-level PlasmicCampaignAvatar renders the root element
  makeNodeComponent("campaignAvatar"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCampaignAvatar
    internalVariantProps: PlasmicCampaignAvatar__VariantProps,
    internalArgProps: PlasmicCampaignAvatar__ArgProps
  }
);

export default PlasmicCampaignAvatar;
/* prettier-ignore-end */
