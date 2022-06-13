// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uHRmC1SQrkfdMqVjfGKf9u
// Component: 2_LEVeodn2LkVu
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
import CampaignAvatar from "../../CampaignAvatar"; // plasmic-import: XigrjzP0WSh8IZ/component
import TabItem from "../../TabItem"; // plasmic-import: VNFIRMJTctpIiZ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_blank_project_mobile_first_css from "../apoiase_website_mobile_first/plasmic_apoiase_website_mobile_first.module.css"; // plasmic-import: bFry1ML5XR1ujHJJdSKVcs/projectcss
import projectcss from "./plasmic_apoiase_home_mobile_first.module.css"; // plasmic-import: uHRmC1SQrkfdMqVjfGKf9u/projectcss
import sty from "./PlasmicCampaignTitle.module.css"; // plasmic-import: 2_LEVeodn2LkVu/css

import ApoiaseIconHeartSelectedIcon from "./icons/PlasmicIcon__ApoiaseIconHeartSelected"; // plasmic-import: zXoW85mfRZ1pQ6/icon

export type PlasmicCampaignTitle__VariantMembers = {
  size: "medium" | "large" | "bigLarge";
  withVerticalTitle: "withVerticalTitle";
  withTags: "withTags";
};

export type PlasmicCampaignTitle__VariantsArgs = {
  size?: MultiChoiceArg<"medium" | "large" | "bigLarge">;
  withVerticalTitle?: SingleBooleanChoiceArg<"withVerticalTitle">;
  withTags?: SingleBooleanChoiceArg<"withTags">;
};

type VariantPropType = keyof PlasmicCampaignTitle__VariantsArgs;
export const PlasmicCampaignTitle__VariantProps = new Array<VariantPropType>(
  "size",
  "withVerticalTitle",
  "withTags"
);

export type PlasmicCampaignTitle__ArgsType = {
  campaignAvatar?: React.ReactNode;
  titulo?: React.ReactNode;
  subtitulo?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCampaignTitle__ArgsType;
export const PlasmicCampaignTitle__ArgProps = new Array<ArgPropType>(
  "campaignAvatar",
  "titulo",
  "subtitulo"
);

export type PlasmicCampaignTitle__OverridesType = {
  campaignTitle?: p.Flex<"div">;
  campaignAvatar?: p.Flex<"div">;
  campaignContent?: p.Flex<"div">;
  campaignInfo?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
  p?: p.Flex<"p">;
  campaignTags?: p.Flex<"div">;
  startIcon2?: p.Flex<"svg">;
  endIcon2?: p.Flex<"svg">;
};

export interface DefaultCampaignTitleProps {
  campaignAvatar?: React.ReactNode;
  titulo?: React.ReactNode;
  subtitulo?: React.ReactNode;
  size?: MultiChoiceArg<"medium" | "large" | "bigLarge">;
  withVerticalTitle?: SingleBooleanChoiceArg<"withVerticalTitle">;
  withTags?: SingleBooleanChoiceArg<"withTags">;
  className?: string;
}

export const defaultCampaignTitle__Args: Partial<PlasmicCampaignTitle__ArgsType> =
  {};

function PlasmicCampaignTitle__RenderFunc(props: {
  variants: PlasmicCampaignTitle__VariantsArgs;
  args: PlasmicCampaignTitle__ArgsType;
  overrides: PlasmicCampaignTitle__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultCampaignTitle__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"campaignTitle"}
      data-plasmic-override={overrides.campaignTitle}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_blank_project_mobile_first_css.plasmic_tokens,
        sty.campaignTitle,
        {
          [sty.campaignTitlesize_large]: hasVariant(variants, "size", "large"),
          [sty.campaignTitlesize_medium]: hasVariant(
            variants,
            "size",
            "medium"
          ),
          [sty.campaignTitlewithVerticalTitle]: hasVariant(
            variants,
            "withVerticalTitle",
            "withVerticalTitle"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"campaignAvatar"}
        data-plasmic-override={overrides.campaignAvatar}
        className={classNames(projectcss.all, sty.campaignAvatar, {
          [sty.campaignAvatarsize_bigLarge]: hasVariant(
            variants,
            "size",
            "bigLarge"
          ),
          [sty.campaignAvatarsize_large]: hasVariant(variants, "size", "large"),
          [sty.campaignAvatarsize_medium]: hasVariant(
            variants,
            "size",
            "medium"
          ),
          [sty.campaignAvatarwithVerticalTitle]: hasVariant(
            variants,
            "withVerticalTitle",
            "withVerticalTitle"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <CampaignAvatar
              className={classNames(
                "__wab_instance",
                sty.campaignAvatar__sr98V
              )}
            />
          ),

          value: args.campaignAvatar
        })}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"campaignContent"}
        data-plasmic-override={overrides.campaignContent}
        hasGap={true}
        className={classNames(projectcss.all, sty.campaignContent, {
          [sty.campaignContentsize_medium]: hasVariant(
            variants,
            "size",
            "medium"
          ),
          [sty.campaignContentwithVerticalTitle]: hasVariant(
            variants,
            "withVerticalTitle",
            "withVerticalTitle"
          )
        })}
      >
        {true ? (
          <div
            data-plasmic-name={"campaignInfo"}
            data-plasmic-override={overrides.campaignInfo}
            className={classNames(projectcss.all, sty.campaignInfo)}
          >
            <h4
              data-plasmic-name={"h4"}
              data-plasmic-override={overrides.h4}
              className={classNames(projectcss.all, projectcss.h4, sty.h4)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Nome da Campanha",
                value: args.titulo
              })}
            </h4>

            {(hasVariant(variants, "withTags", "withTags") ? true : true) ? (
              <p
                data-plasmic-name={"p"}
                data-plasmic-override={overrides.p}
                className={classNames(projectcss.all, projectcss.p, sty.p, {
                  [sty.pwithTags]: hasVariant(variants, "withTags", "withTags")
                })}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "Subtítulo de Campanha",
                  value: args.subtitulo
                })}
              </p>
            ) : null}
          </div>
        ) : null}
        {(hasVariant(variants, "withTags", "withTags") ? true : true) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"campaignTags"}
            data-plasmic-override={overrides.campaignTags}
            hasGap={true}
            className={classNames(projectcss.all, sty.campaignTags, {
              [sty.campaignTagswithTags]: hasVariant(
                variants,
                "withTags",
                "withTags"
              )
            })}
          >
            <TabItem
              className={classNames("__wab_instance", sty.tabItem__f0OVb)}
              sizes={["small"]}
              title={"Animação"}
            />

            <TabItem
              className={classNames("__wab_instance", sty.tabItem__vmKg)}
              endIconSpace={
                <svg
                  data-plasmic-name={"endIcon2"}
                  data-plasmic-override={overrides.endIcon2}
                  className={classNames(projectcss.all, sty.endIcon2)}
                  role={"img"}
                />
              }
              sizes={["small"]}
              startIconSpace={
                <svg
                  data-plasmic-name={"startIcon2"}
                  data-plasmic-override={overrides.startIcon2}
                  className={classNames(projectcss.all, sty.startIcon2)}
                  role={"img"}
                />
              }
              title={"Animação"}
            />
          </p.Stack>
        ) : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  campaignTitle: [
    "campaignTitle",
    "campaignAvatar",
    "campaignContent",
    "campaignInfo",
    "h4",
    "p",
    "campaignTags",
    "startIcon2",
    "endIcon2"
  ],
  campaignAvatar: ["campaignAvatar"],
  campaignContent: [
    "campaignContent",
    "campaignInfo",
    "h4",
    "p",
    "campaignTags",
    "startIcon2",
    "endIcon2"
  ],
  campaignInfo: ["campaignInfo", "h4", "p"],
  h4: ["h4"],
  p: ["p"],
  campaignTags: ["campaignTags", "startIcon2", "endIcon2"],
  startIcon2: ["startIcon2"],
  endIcon2: ["endIcon2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  campaignTitle: "div";
  campaignAvatar: "div";
  campaignContent: "div";
  campaignInfo: "div";
  h4: "h4";
  p: "p";
  campaignTags: "div";
  startIcon2: "svg";
  endIcon2: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCampaignTitle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCampaignTitle__VariantsArgs;
    args?: PlasmicCampaignTitle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCampaignTitle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCampaignTitle__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCampaignTitle__ArgProps,
      internalVariantPropNames: PlasmicCampaignTitle__VariantProps
    });

    return PlasmicCampaignTitle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "campaignTitle") {
    func.displayName = "PlasmicCampaignTitle";
  } else {
    func.displayName = `PlasmicCampaignTitle.${nodeName}`;
  }
  return func;
}

export const PlasmicCampaignTitle = Object.assign(
  // Top-level PlasmicCampaignTitle renders the root element
  makeNodeComponent("campaignTitle"),
  {
    // Helper components rendering sub-elements
    campaignAvatar: makeNodeComponent("campaignAvatar"),
    campaignContent: makeNodeComponent("campaignContent"),
    campaignInfo: makeNodeComponent("campaignInfo"),
    h4: makeNodeComponent("h4"),
    p: makeNodeComponent("p"),
    campaignTags: makeNodeComponent("campaignTags"),
    startIcon2: makeNodeComponent("startIcon2"),
    endIcon2: makeNodeComponent("endIcon2"),

    // Metadata about props expected for PlasmicCampaignTitle
    internalVariantProps: PlasmicCampaignTitle__VariantProps,
    internalArgProps: PlasmicCampaignTitle__ArgProps
  }
);

export default PlasmicCampaignTitle;
/* prettier-ignore-end */
