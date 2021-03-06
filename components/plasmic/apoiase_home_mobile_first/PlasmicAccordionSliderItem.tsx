// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uHRmC1SQrkfdMqVjfGKf9u
// Component: gN7pnF8TwNmzHv
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

import { useScreenVariants as useScreenVariantsxe6Z4OYQgGkbgB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: xe6z4oYQgGkbgB/globalVariant
import { PrimaryValue, usePrimary } from "./PlasmicGlobalVariant__Primary"; // plasmic-import: lKV6MYIOf8ZKYv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_blank_project_mobile_first_css from "../apoiase_website_mobile_first/plasmic_apoiase_website_mobile_first.module.css"; // plasmic-import: bFry1ML5XR1ujHJJdSKVcs/projectcss
import projectcss from "./plasmic_apoiase_home_mobile_first.module.css"; // plasmic-import: uHRmC1SQrkfdMqVjfGKf9u/projectcss
import sty from "./PlasmicAccordionSliderItem.module.css"; // plasmic-import: gN7pnF8TwNmzHv/css

export type PlasmicAccordionSliderItem__VariantMembers = {
  openned: "openned";
};

export type PlasmicAccordionSliderItem__VariantsArgs = {
  openned?: SingleBooleanChoiceArg<"openned">;
};

type VariantPropType = keyof PlasmicAccordionSliderItem__VariantsArgs;
export const PlasmicAccordionSliderItem__VariantProps =
  new Array<VariantPropType>("openned");

export type PlasmicAccordionSliderItem__ArgsType = {
  number?: React.ReactNode;
  description?: React.ReactNode;
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAccordionSliderItem__ArgsType;
export const PlasmicAccordionSliderItem__ArgProps = new Array<ArgPropType>(
  "number",
  "description",
  "title"
);

export type PlasmicAccordionSliderItem__OverridesType = {
  accordionSlider?: p.Flex<"button">;
  sliderNumber?: p.Flex<"div">;
  sliderTitle?: p.Flex<"div">;
  p?: p.Flex<"p">;
};

export interface DefaultAccordionSliderItemProps {
  number?: React.ReactNode;
  description?: React.ReactNode;
  title?: React.ReactNode;
  openned?: SingleBooleanChoiceArg<"openned">;
  className?: string;
}

export const defaultAccordionSliderItem__Args: Partial<PlasmicAccordionSliderItem__ArgsType> =
  {};

function PlasmicAccordionSliderItem__RenderFunc(props: {
  variants: PlasmicAccordionSliderItem__VariantsArgs;
  args: PlasmicAccordionSliderItem__ArgsType;
  overrides: PlasmicAccordionSliderItem__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultAccordionSliderItem__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsxe6Z4OYQgGkbgB(),
    primary: usePrimary()
  });

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"accordionSlider"}
      data-plasmic-override={overrides.accordionSlider}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_blank_project_mobile_first_css.plasmic_tokens,
        sty.accordionSlider,
        {
          [sty.accordionSlideropenned]: hasVariant(
            variants,
            "openned",
            "openned"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"sliderNumber"}
        data-plasmic-override={overrides.sliderNumber}
        className={classNames(projectcss.all, sty.sliderNumber, {
          [sty.sliderNumberopenned]: hasVariant(variants, "openned", "openned")
        })}
      >
        <h4
          className={classNames(projectcss.all, projectcss.h4, sty.h4___4M5Te, {
            [sty.h4openned___4M5Tee46Nu]: hasVariant(
              variants,
              "openned",
              "openned"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "01.",
            value: args.number,
            className: classNames(sty.slotTargetNumber, {
              [sty.slotTargetNumberglobal_primary_hover_openned]:
                hasVariant(variants, "openned", "openned") &&
                hasVariant(globalVariants, "primary", "hover"),
              [sty.slotTargetNumberopenned]: hasVariant(
                variants,
                "openned",
                "openned"
              )
            })
          })}
        </h4>
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"sliderTitle"}
        data-plasmic-override={overrides.sliderTitle}
        hasGap={true}
        className={classNames(projectcss.all, sty.sliderTitle, {
          [sty.sliderTitleopenned]: hasVariant(variants, "openned", "openned")
        })}
      >
        <h4
          className={classNames(projectcss.all, projectcss.h4, sty.h4__vNbMh, {
            [sty.h4openned__vNbMhe46Nu]: hasVariant(
              variants,
              "openned",
              "openned"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Receba",
            value: args.title,
            className: classNames(sty.slotTargetTitle, {
              [sty.slotTargetTitleopenned]: hasVariant(
                variants,
                "openned",
                "openned"
              )
            })
          })}
        </h4>

        {(hasVariant(variants, "openned", "openned") ? true : true) ? (
          <p
            data-plasmic-name={"p"}
            data-plasmic-override={overrides.p}
            className={classNames(projectcss.all, projectcss.p, sty.p, {
              [sty.popenned]: hasVariant(variants, "openned", "openned")
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents:
                "Voc?? sempre fica com 87% do valor total arrecadado pela sua campanha. N??s retemos 13% e com esse valor se pagam os intermediadores de pagamento parceiros (em torno de 5%) e a remunera????o da plataforma APOIA.se (em torno de 8%).",
              value: args.description,
              className: classNames(sty.slotTargetDescription, {
                [sty.slotTargetDescriptionopenned]: hasVariant(
                  variants,
                  "openned",
                  "openned"
                )
              })
            })}
          </p>
        ) : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  accordionSlider: ["accordionSlider", "sliderNumber", "sliderTitle", "p"],
  sliderNumber: ["sliderNumber"],
  sliderTitle: ["sliderTitle", "p"],
  p: ["p"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  accordionSlider: "button";
  sliderNumber: "div";
  sliderTitle: "div";
  p: "p";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAccordionSliderItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAccordionSliderItem__VariantsArgs;
    args?: PlasmicAccordionSliderItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAccordionSliderItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAccordionSliderItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAccordionSliderItem__ArgProps,
      internalVariantPropNames: PlasmicAccordionSliderItem__VariantProps
    });

    return PlasmicAccordionSliderItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "accordionSlider") {
    func.displayName = "PlasmicAccordionSliderItem";
  } else {
    func.displayName = `PlasmicAccordionSliderItem.${nodeName}`;
  }
  return func;
}

export const PlasmicAccordionSliderItem = Object.assign(
  // Top-level PlasmicAccordionSliderItem renders the root element
  makeNodeComponent("accordionSlider"),
  {
    // Helper components rendering sub-elements
    sliderNumber: makeNodeComponent("sliderNumber"),
    sliderTitle: makeNodeComponent("sliderTitle"),
    p: makeNodeComponent("p"),

    // Metadata about props expected for PlasmicAccordionSliderItem
    internalVariantProps: PlasmicAccordionSliderItem__VariantProps,
    internalArgProps: PlasmicAccordionSliderItem__ArgProps
  }
);

export default PlasmicAccordionSliderItem;
/* prettier-ignore-end */
