// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uHRmC1SQrkfdMqVjfGKf9u
// Component: o6A8HVpdskn2kO
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
import SlideArrow from "../../SlideArrow"; // plasmic-import: mQRkM4cmowwPfP/component
import TestemonialCard from "../../TestemonialCard"; // plasmic-import: rrz-suZaNpG1Ac/component
import SlideBullet from "../../SlideBullet"; // plasmic-import: DzQ1Cxjuuc37kr/component

import { useScreenVariants as useScreenVariantsxe6Z4OYQgGkbgB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: xe6z4oYQgGkbgB/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_blank_project_mobile_first_css from "../apoiase_website_mobile_first/plasmic_apoiase_website_mobile_first.module.css"; // plasmic-import: bFry1ML5XR1ujHJJdSKVcs/projectcss
import projectcss from "./plasmic_apoiase_home_mobile_first.module.css"; // plasmic-import: uHRmC1SQrkfdMqVjfGKf9u/projectcss
import sty from "./PlasmicTestemonialSlider.module.css"; // plasmic-import: o6A8HVpdskn2kO/css

import ApoiaseIconArrowLeftIcon from "./icons/PlasmicIcon__ApoiaseIconArrowLeft"; // plasmic-import: Za6ysYytYSJTPR/icon
import ApoiaseIconArrowRightIcon from "./icons/PlasmicIcon__ApoiaseIconArrowRight"; // plasmic-import: V9-fXVC3GD8ubn/icon

export type PlasmicTestemonialSlider__VariantMembers = {};

export type PlasmicTestemonialSlider__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestemonialSlider__VariantsArgs;
export const PlasmicTestemonialSlider__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTestemonialSlider__ArgsType = {};
type ArgPropType = keyof PlasmicTestemonialSlider__ArgsType;
export const PlasmicTestemonialSlider__ArgProps = new Array<ArgPropType>();

export type PlasmicTestemonialSlider__OverridesType = {
  root?: p.Flex<"div">;
  slideContent?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  slideBullet?: p.Flex<typeof SlideBullet>;
};

export interface DefaultTestemonialSliderProps {
  className?: string;
}

export const defaultTestemonialSlider__Args: Partial<PlasmicTestemonialSlider__ArgsType> =
  {};

function PlasmicTestemonialSlider__RenderFunc(props: {
  variants: PlasmicTestemonialSlider__VariantsArgs;
  args: PlasmicTestemonialSlider__ArgsType;
  overrides: PlasmicTestemonialSlider__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultTestemonialSlider__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsxe6Z4OYQgGkbgB()
  });

  return (
    true ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
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
          sty.root
        )}
      >
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"slideContent"}
            data-plasmic-override={overrides.slideContent}
            hasGap={true}
            className={classNames(projectcss.all, sty.slideContent)}
          >
            {true ? (
              <SlideArrow
                className={classNames("__wab_instance", sty.slideArrow__wdZmu)}
              />
            ) : null}
            {true ? (
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                <TestemonialCard
                  className={classNames(
                    "__wab_instance",
                    sty.testemonialCard__vbX0
                  )}
                >
                  {
                    "           A APOIA.se me deu autonomia para criar conte??do sobre ci??ncia e sa??de mental. Hoje eu consigo pagar as contas fazendo o que amo. Me deu autonomia para criar conte??do sobre ci??ncia e sa??de mental. Hoje eu consigo pagar as contas fazendo o que amo. Me deu autonomia para criar conte??do sobre ci??ncia e sa??de mental. Hoje eu consigo pagar as contas fazendo o que amo. "
                  }
                </TestemonialCard>

                <TestemonialCard
                  className={classNames(
                    "__wab_instance",
                    sty.testemonialCard__on5Ob
                  )}
                >
                  {
                    "           A APOIA.se me deu autonomia para criar conte??do sobre ci??ncia e sa??de mental. Hoje eu consigo pagar as contas fazendo o que amo. Me deu autonomia para criar conte??do sobre ci??ncia e sa??de mental. Hoje eu consigo pagar as contas fazendo o que amo. Me deu autonomia para criar conte??do sobre ci??ncia e sa??de mental. Hoje eu consigo pagar as contas fazendo o que amo. "
                  }
                </TestemonialCard>

                <TestemonialCard
                  className={classNames(
                    "__wab_instance",
                    sty.testemonialCard__wjL0O
                  )}
                />
              </div>
            ) : null}
            {true ? (
              <SlideArrow
                className={classNames("__wab_instance", sty.slideArrow__nlu86)}
              >
                <ApoiaseIconArrowRightIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </SlideArrow>
            ) : null}
          </p.Stack>
        ) : null}
        {true ? (
          <SlideBullet
            data-plasmic-name={"slideBullet"}
            data-plasmic-override={overrides.slideBullet}
            className={classNames("__wab_instance", sty.slideBullet)}
          />
        ) : null}
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "slideContent", "freeBox", "svg", "slideBullet"],
  slideContent: ["slideContent", "freeBox", "svg"],
  freeBox: ["freeBox"],
  svg: ["svg"],
  slideBullet: ["slideBullet"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  slideContent: "div";
  freeBox: "div";
  svg: "svg";
  slideBullet: typeof SlideBullet;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestemonialSlider__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestemonialSlider__VariantsArgs;
    args?: PlasmicTestemonialSlider__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestemonialSlider__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTestemonialSlider__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTestemonialSlider__ArgProps,
      internalVariantPropNames: PlasmicTestemonialSlider__VariantProps
    });

    return PlasmicTestemonialSlider__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestemonialSlider";
  } else {
    func.displayName = `PlasmicTestemonialSlider.${nodeName}`;
  }
  return func;
}

export const PlasmicTestemonialSlider = Object.assign(
  // Top-level PlasmicTestemonialSlider renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    slideContent: makeNodeComponent("slideContent"),
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    slideBullet: makeNodeComponent("slideBullet"),

    // Metadata about props expected for PlasmicTestemonialSlider
    internalVariantProps: PlasmicTestemonialSlider__VariantProps,
    internalArgProps: PlasmicTestemonialSlider__ArgProps
  }
);

export default PlasmicTestemonialSlider;
/* prettier-ignore-end */
