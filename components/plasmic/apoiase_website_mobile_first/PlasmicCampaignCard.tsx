// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bFry1ML5XR1ujHJJdSKVcs
// Component: MSO7FuGltAbU
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
import CampaignTitle from "../../CampaignTitle"; // plasmic-import: rAKB-PB0bJnx/component
import CampaignAvatar from "../../CampaignAvatar"; // plasmic-import: ymQ_VZgdSMvX/component
import Separator from "../../Separator"; // plasmic-import: F_Ugr1Q-8eSP/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_apoiase_website_mobile_first.module.css"; // plasmic-import: bFry1ML5XR1ujHJJdSKVcs/projectcss
import sty from "./PlasmicCampaignCard.module.css"; // plasmic-import: MSO7FuGltAbU/css

import ApoiaseIconMyPledgeIcon from "./icons/PlasmicIcon__ApoiaseIconMyPledge"; // plasmic-import: jl53ngLG8wG/icon
import ApoiaseCampanhaContinuaSymbolIcon from "./icons/PlasmicIcon__ApoiaseCampanhaContinuaSymbol"; // plasmic-import: BvHeNgJYjPGX/icon
import ApoiaseCampanhaPontualSymbolIcon from "./icons/PlasmicIcon__ApoiaseCampanhaPontualSymbol"; // plasmic-import: KagUrivbknPO/icon
import ApoiaseCampanhaContinuaTypoIcon from "./icons/PlasmicIcon__ApoiaseCampanhaContinuaTypo"; // plasmic-import: bZwMDOJMJAi_/icon
import ApoiaseCampanhaPontualTypoIcon from "./icons/PlasmicIcon__ApoiaseCampanhaPontualTypo"; // plasmic-import: fBWmlKZrIY-C/icon

export type PlasmicCampaignCard__VariantMembers = {
  pontual: "pontual";
  withoutGoal: "withoutGoal";
  withCountDays: "withCountDays";
};

export type PlasmicCampaignCard__VariantsArgs = {
  pontual?: SingleBooleanChoiceArg<"pontual">;
  withoutGoal?: SingleBooleanChoiceArg<"withoutGoal">;
  withCountDays?: SingleBooleanChoiceArg<"withCountDays">;
};

type VariantPropType = keyof PlasmicCampaignCard__VariantsArgs;
export const PlasmicCampaignCard__VariantProps = new Array<VariantPropType>(
  "pontual",
  "withoutGoal",
  "withCountDays"
);

export type PlasmicCampaignCard__ArgsType = {
  metaDescription?: React.ReactNode;
  metaValue?: React.ReactNode;
  slot2?: React.ReactNode;
  startIconSpace?: React.ReactNode;
  title?: React.ReactNode;
  endIconSpace?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCampaignCard__ArgsType;
export const PlasmicCampaignCard__ArgProps = new Array<ArgPropType>(
  "metaDescription",
  "metaValue",
  "slot2",
  "startIconSpace",
  "title",
  "endIconSpace"
);

export type PlasmicCampaignCard__OverridesType = {
  cardCampaign?: p.Flex<"div">;
  campaignCover?: p.Flex<"div">;
  countDays?: p.Flex<"div">;
  title?: p.Flex<"h6">;
  h4?: p.Flex<"h4">;
  text?: p.Flex<"div">;
  campaignGoal?: p.Flex<"div">;
  goal?: p.Flex<"div">;
  progressBar?: p.Flex<"div">;
  progressIndicator?: p.Flex<"div">;
  separator?: p.Flex<typeof Separator>;
  campaignInfo?: p.Flex<"div">;
  supporters?: p.Flex<"div">;
  supporterIcon?: p.Flex<"svg">;
  verticalAlign?: p.Flex<"div">;
  logo?: p.Flex<"div">;
  campaignIcon?: p.Flex<"div">;
  campaignTypeIcon?: p.Flex<"svg">;
  svg?: p.Flex<"svg">;
};

export interface DefaultCampaignCardProps {
  metaDescription?: React.ReactNode;
  metaValue?: React.ReactNode;
  slot2?: React.ReactNode;
  startIconSpace?: React.ReactNode;
  title?: React.ReactNode;
  endIconSpace?: React.ReactNode;
  pontual?: SingleBooleanChoiceArg<"pontual">;
  withoutGoal?: SingleBooleanChoiceArg<"withoutGoal">;
  withCountDays?: SingleBooleanChoiceArg<"withCountDays">;
  className?: string;
}

export const defaultCampaignCard__Args: Partial<PlasmicCampaignCard__ArgsType> =
  {};

function PlasmicCampaignCard__RenderFunc(props: {
  variants: PlasmicCampaignCard__VariantsArgs;
  args: PlasmicCampaignCard__ArgsType;
  overrides: PlasmicCampaignCard__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultCampaignCard__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"cardCampaign"}
      data-plasmic-override={overrides.cardCampaign}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.cardCampaign,
        {
          [sty.cardCampaignwithoutGoal]: hasVariant(
            variants,
            "withoutGoal",
            "withoutGoal"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"campaignCover"}
        data-plasmic-override={overrides.campaignCover}
        className={classNames(projectcss.all, sty.campaignCover)}
      />

      {true ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__k3ZZf, {
            [sty.freeBoxwithCountDays__k3ZZfI2V4K]: hasVariant(
              variants,
              "withCountDays",
              "withCountDays"
            ),
            [sty.freeBoxwithoutGoal__k3ZZfmCes4]: hasVariant(
              variants,
              "withoutGoal",
              "withoutGoal"
            )
          })}
        >
          {(
            hasVariant(variants, "withCountDays", "withCountDays")
              ? true
              : false
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"countDays"}
              data-plasmic-override={overrides.countDays}
              hasGap={true}
              className={classNames(projectcss.all, sty.countDays, {
                [sty.countDayswithCountDays]: hasVariant(
                  variants,
                  "withCountDays",
                  "withCountDays"
                )
              })}
            >
              {false
                ? p.renderPlasmicSlot({
                    defaultContents: (
                      <svg
                        className={classNames(projectcss.all, sty.svg__h2LaS)}
                        role={"img"}
                      />
                    ),

                    value: args.startIconSpace
                  })
                : null}

              <h6
                data-plasmic-name={"title"}
                data-plasmic-override={overrides.title}
                className={classNames(projectcss.all, projectcss.h6, sty.title)}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___7Euwf
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{""}</React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ fontWeight: 700, color: "#DB2328" }}
                        >
                          {"40 dias"}
                        </span>
                        <React.Fragment>{" restantes"}</React.Fragment>
                      </React.Fragment>
                    </div>
                  ),

                  value: args.title
                })}
              </h6>

              {false
                ? p.renderPlasmicSlot({
                    defaultContents: (
                      <svg
                        className={classNames(projectcss.all, sty.svg___1ZU9S)}
                        role={"img"}
                      />
                    ),

                    value: args.endIconSpace
                  })
                : null}
            </p.Stack>
          ) : null}

          <CampaignTitle
            size={["bigLarge"]}
            subtitulo={
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"Subtítulo de Campanha"}
              </div>
            }
            titulo={
              <h4
                data-plasmic-name={"h4"}
                data-plasmic-override={overrides.h4}
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4
                )}
              >
                {"Nome da Campanha"}
              </h4>
            }
            withVerticalTitle={true}
          />
        </div>
      ) : null}
      {(hasVariant(variants, "withoutGoal", "withoutGoal") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"campaignGoal"}
          data-plasmic-override={overrides.campaignGoal}
          hasGap={true}
          className={classNames(projectcss.all, sty.campaignGoal, {
            [sty.campaignGoalwithoutGoal]: hasVariant(
              variants,
              "withoutGoal",
              "withoutGoal"
            )
          })}
        >
          <div
            data-plasmic-name={"goal"}
            data-plasmic-override={overrides.goal}
            className={classNames(projectcss.all, sty.goal)}
          >
            <h5
              className={classNames(
                projectcss.all,
                projectcss.h5,
                sty.h5__g1Yg5
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: "R$28.045",
                value: args.metaValue,
                className: classNames(sty.slotTargetMetaValue)
              })}
            </h5>

            <p
              className={classNames(
                projectcss.all,
                projectcss.p,
                sty.p___23Fkm,
                {
                  [sty.pwithoutGoal___23FkmmCes4]: hasVariant(
                    variants,
                    "withoutGoal",
                    "withoutGoal"
                  )
                }
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: "arrecadados por mês",
                value: args.metaDescription,
                className: classNames(sty.slotTargetMetaDescription, {
                  [sty.slotTargetMetaDescriptionwithoutGoal]: hasVariant(
                    variants,
                    "withoutGoal",
                    "withoutGoal"
                  )
                })
              })}
            </p>
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"progressBar"}
            data-plasmic-override={overrides.progressBar}
            hasGap={true}
            className={classNames(projectcss.all, sty.progressBar)}
          >
            <div
              data-plasmic-name={"progressIndicator"}
              data-plasmic-override={overrides.progressIndicator}
              className={classNames(projectcss.all, sty.progressIndicator)}
            />
          </p.Stack>
        </p.Stack>
      ) : null}

      <Separator
        data-plasmic-name={"separator"}
        data-plasmic-override={overrides.separator}
        className={classNames("__wab_instance", sty.separator)}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"campaignInfo"}
        data-plasmic-override={overrides.campaignInfo}
        hasGap={true}
        className={classNames(projectcss.all, sty.campaignInfo)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"supporters"}
          data-plasmic-override={overrides.supporters}
          hasGap={true}
          className={classNames(projectcss.all, sty.supporters)}
        >
          <ApoiaseIconMyPledgeIcon
            data-plasmic-name={"supporterIcon"}
            data-plasmic-override={overrides.supporterIcon}
            className={classNames(projectcss.all, sty.supporterIcon)}
            role={"img"}
          />

          <div
            data-plasmic-name={"verticalAlign"}
            data-plasmic-override={overrides.verticalAlign}
            className={classNames(projectcss.all, sty.verticalAlign)}
          >
            <h5
              className={classNames(
                projectcss.all,
                projectcss.h5,
                sty.h5__yskOq
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: "20214",
                value: args.slot2,
                className: classNames(sty.slotTargetSlot2)
              })}
            </h5>

            <p
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.p__hbsUa
              )}
            >
              {"apoiadores(as)"}
            </p>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          hasGap={true}
          className={classNames(projectcss.all, sty.logo)}
        >
          <div
            data-plasmic-name={"campaignIcon"}
            data-plasmic-override={overrides.campaignIcon}
            className={classNames(projectcss.all, sty.campaignIcon)}
          >
            <p.PlasmicIcon
              data-plasmic-name={"campaignTypeIcon"}
              data-plasmic-override={overrides.campaignTypeIcon}
              PlasmicIconType={
                hasVariant(variants, "pontual", "pontual")
                  ? ApoiaseCampanhaPontualSymbolIcon
                  : ApoiaseCampanhaContinuaSymbolIcon
              }
              className={classNames(projectcss.all, sty.campaignTypeIcon, {
                [sty.campaignTypeIconpontual]: hasVariant(
                  variants,
                  "pontual",
                  "pontual"
                )
              })}
              role={"img"}
            />
          </div>

          <p.Stack
            as={p.PlasmicIcon}
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            hasGap={true}
            PlasmicIconType={
              hasVariant(variants, "pontual", "pontual")
                ? ApoiaseCampanhaPontualTypoIcon
                : ApoiaseCampanhaContinuaTypoIcon
            }
            className={classNames(projectcss.all, sty.svg, {
              [sty.svgpontual]: hasVariant(variants, "pontual", "pontual")
            })}
            role={"img"}
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  cardCampaign: [
    "cardCampaign",
    "campaignCover",
    "countDays",
    "title",
    "h4",
    "text",
    "campaignGoal",
    "goal",
    "progressBar",
    "progressIndicator",
    "separator",
    "campaignInfo",
    "supporters",
    "supporterIcon",
    "verticalAlign",
    "logo",
    "campaignIcon",
    "campaignTypeIcon",
    "svg"
  ],
  campaignCover: ["campaignCover"],
  countDays: ["countDays", "title"],
  title: ["title"],
  h4: ["h4"],
  text: ["text"],
  campaignGoal: ["campaignGoal", "goal", "progressBar", "progressIndicator"],
  goal: ["goal"],
  progressBar: ["progressBar", "progressIndicator"],
  progressIndicator: ["progressIndicator"],
  separator: ["separator"],
  campaignInfo: [
    "campaignInfo",
    "supporters",
    "supporterIcon",
    "verticalAlign",
    "logo",
    "campaignIcon",
    "campaignTypeIcon",
    "svg"
  ],
  supporters: ["supporters", "supporterIcon", "verticalAlign"],
  supporterIcon: ["supporterIcon"],
  verticalAlign: ["verticalAlign"],
  logo: ["logo", "campaignIcon", "campaignTypeIcon", "svg"],
  campaignIcon: ["campaignIcon", "campaignTypeIcon"],
  campaignTypeIcon: ["campaignTypeIcon"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  cardCampaign: "div";
  campaignCover: "div";
  countDays: "div";
  title: "h6";
  h4: "h4";
  text: "div";
  campaignGoal: "div";
  goal: "div";
  progressBar: "div";
  progressIndicator: "div";
  separator: typeof Separator;
  campaignInfo: "div";
  supporters: "div";
  supporterIcon: "svg";
  verticalAlign: "div";
  logo: "div";
  campaignIcon: "div";
  campaignTypeIcon: "svg";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCampaignCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCampaignCard__VariantsArgs;
    args?: PlasmicCampaignCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCampaignCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCampaignCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCampaignCard__ArgProps,
      internalVariantPropNames: PlasmicCampaignCard__VariantProps
    });

    return PlasmicCampaignCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "cardCampaign") {
    func.displayName = "PlasmicCampaignCard";
  } else {
    func.displayName = `PlasmicCampaignCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCampaignCard = Object.assign(
  // Top-level PlasmicCampaignCard renders the root element
  makeNodeComponent("cardCampaign"),
  {
    // Helper components rendering sub-elements
    campaignCover: makeNodeComponent("campaignCover"),
    countDays: makeNodeComponent("countDays"),
    title: makeNodeComponent("title"),
    h4: makeNodeComponent("h4"),
    text: makeNodeComponent("text"),
    campaignGoal: makeNodeComponent("campaignGoal"),
    goal: makeNodeComponent("goal"),
    progressBar: makeNodeComponent("progressBar"),
    progressIndicator: makeNodeComponent("progressIndicator"),
    separator: makeNodeComponent("separator"),
    campaignInfo: makeNodeComponent("campaignInfo"),
    supporters: makeNodeComponent("supporters"),
    supporterIcon: makeNodeComponent("supporterIcon"),
    verticalAlign: makeNodeComponent("verticalAlign"),
    logo: makeNodeComponent("logo"),
    campaignIcon: makeNodeComponent("campaignIcon"),
    campaignTypeIcon: makeNodeComponent("campaignTypeIcon"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicCampaignCard
    internalVariantProps: PlasmicCampaignCard__VariantProps,
    internalArgProps: PlasmicCampaignCard__ArgProps
  }
);

export default PlasmicCampaignCard;
/* prettier-ignore-end */