// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uHRmC1SQrkfdMqVjfGKf9u
// Component: rrz-suZaNpG1Ac
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
import CampaignTitle from "../../CampaignTitle"; // plasmic-import: 2_LEVeodn2LkVu/component
import CampaignAvatar from "../../CampaignAvatar"; // plasmic-import: XigrjzP0WSh8IZ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_blank_project_mobile_first_css from "../apoiase_website_mobile_first/plasmic_apoiase_website_mobile_first.module.css"; // plasmic-import: bFry1ML5XR1ujHJJdSKVcs/projectcss
import projectcss from "./plasmic_apoiase_home_mobile_first.module.css"; // plasmic-import: uHRmC1SQrkfdMqVjfGKf9u/projectcss
import sty from "./PlasmicTestemonialCard.module.css"; // plasmic-import: rrz-suZaNpG1Ac/css

import ApoiaseIconQuoteRightIcon from "./icons/PlasmicIcon__ApoiaseIconQuoteRight"; // plasmic-import: df0g7W6K8fvMjM/icon
import ApoiaseIconQuoteLeftIcon from "./icons/PlasmicIcon__ApoiaseIconQuoteLeft"; // plasmic-import: 7grFGXJLGB6Gvd/icon

export type PlasmicTestemonialCard__VariantMembers = {};

export type PlasmicTestemonialCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestemonialCard__VariantsArgs;
export const PlasmicTestemonialCard__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTestemonialCard__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTestemonialCard__ArgsType;
export const PlasmicTestemonialCard__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicTestemonialCard__OverridesType = {
  testemonialCard?: p.Flex<"div">;
  testemonialText?: p.Flex<"div">;
  quoteLeft?: p.Flex<"div">;
  quoteRight?: p.Flex<"div">;
  campaignTitle?: p.Flex<typeof CampaignTitle>;
};

export interface DefaultTestemonialCardProps {
  children?: React.ReactNode;
  className?: string;
}

export const defaultTestemonialCard__Args: Partial<PlasmicTestemonialCard__ArgsType> =
  {};

function PlasmicTestemonialCard__RenderFunc(props: {
  variants: PlasmicTestemonialCard__VariantsArgs;
  args: PlasmicTestemonialCard__ArgsType;
  overrides: PlasmicTestemonialCard__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultTestemonialCard__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"testemonialCard"}
      data-plasmic-override={overrides.testemonialCard}
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
        sty.testemonialCard
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"testemonialText"}
        data-plasmic-override={overrides.testemonialText}
        hasGap={true}
        className={classNames(projectcss.all, sty.testemonialText)}
      >
        <div
          data-plasmic-name={"quoteLeft"}
          data-plasmic-override={overrides.quoteLeft}
          className={classNames(projectcss.all, sty.quoteLeft)}
        >
          <p.Stack
            as={ApoiaseIconQuoteRightIcon}
            hasGap={true}
            className={classNames(projectcss.all, sty.svg__htliD)}
            role={"img"}
          />
        </div>

        {p.renderPlasmicSlot({
          defaultContents:
            "           A APOIA.se me deu autonomia para criar conteúdo sobre ciência e saúde mental. Hoje eu consigo pagar as contas fazendo o que amo. Me deu autonomia para criar conteúdo sobre ciência e saúde mental. Hoje eu consigo pagar as contas fazendo o que amo. Me deu autonomia para criar conteúdo sobre ciência e saúde mental. Hoje eu consigo pagar as contas fazendo o que amo. ",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}

        <div
          data-plasmic-name={"quoteRight"}
          data-plasmic-override={overrides.quoteRight}
          className={classNames(projectcss.all, sty.quoteRight)}
        >
          <p.Stack
            as={ApoiaseIconQuoteLeftIcon}
            hasGap={true}
            className={classNames(projectcss.all, sty.svg___4L5Tg)}
            role={"img"}
          />
        </div>
      </p.Stack>

      <CampaignTitle
        data-plasmic-name={"campaignTitle"}
        data-plasmic-override={overrides.campaignTitle}
        className={classNames("__wab_instance", sty.campaignTitle)}
        size={["large"]}
        withTags={true}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  testemonialCard: [
    "testemonialCard",
    "testemonialText",
    "quoteLeft",
    "quoteRight",
    "campaignTitle"
  ],
  testemonialText: ["testemonialText", "quoteLeft", "quoteRight"],
  quoteLeft: ["quoteLeft"],
  quoteRight: ["quoteRight"],
  campaignTitle: ["campaignTitle"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  testemonialCard: "div";
  testemonialText: "div";
  quoteLeft: "div";
  quoteRight: "div";
  campaignTitle: typeof CampaignTitle;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestemonialCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestemonialCard__VariantsArgs;
    args?: PlasmicTestemonialCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestemonialCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTestemonialCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTestemonialCard__ArgProps,
      internalVariantPropNames: PlasmicTestemonialCard__VariantProps
    });

    return PlasmicTestemonialCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "testemonialCard") {
    func.displayName = "PlasmicTestemonialCard";
  } else {
    func.displayName = `PlasmicTestemonialCard.${nodeName}`;
  }
  return func;
}

export const PlasmicTestemonialCard = Object.assign(
  // Top-level PlasmicTestemonialCard renders the root element
  makeNodeComponent("testemonialCard"),
  {
    // Helper components rendering sub-elements
    testemonialText: makeNodeComponent("testemonialText"),
    quoteLeft: makeNodeComponent("quoteLeft"),
    quoteRight: makeNodeComponent("quoteRight"),
    campaignTitle: makeNodeComponent("campaignTitle"),

    // Metadata about props expected for PlasmicTestemonialCard
    internalVariantProps: PlasmicTestemonialCard__VariantProps,
    internalArgProps: PlasmicTestemonialCard__ArgProps
  }
);

export default PlasmicTestemonialCard;
/* prettier-ignore-end */