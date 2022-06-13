// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bFry1ML5XR1ujHJJdSKVcs
// Component: xIAcZD5wjE5Z
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
import SearchInput from "../../SearchInput"; // plasmic-import: 3wHlcCTYmyQ-/component
import Button from "../../Button"; // plasmic-import: BHBrHqJAQNB/component
import TabItem from "../../TabItem"; // plasmic-import: FmoV6OissYUj/component
import CampaignCard from "../../CampaignCard"; // plasmic-import: MSO7FuGltAbU/component
import SlideBullet from "../../SlideBullet"; // plasmic-import: W9n9GpA7ShNF/component
import SearchDropdown from "../../SearchDropdown"; // plasmic-import: zibwN6i2Rr8x/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_apoiase_website_mobile_first.module.css"; // plasmic-import: bFry1ML5XR1ujHJJdSKVcs/projectcss
import sty from "./PlasmicSearch.module.css"; // plasmic-import: xIAcZD5wjE5Z/css

import ApoiaseIconCheckIcon from "./icons/PlasmicIcon__ApoiaseIconCheck"; // plasmic-import: qkXlJZBOrBce/icon
import ApoiaseIconArrowRightIcon from "./icons/PlasmicIcon__ApoiaseIconArrowRight"; // plasmic-import: 4yLICZYVLiB-/icon
import ApoiaseIconStarSmallIcon from "./icons/PlasmicIcon__ApoiaseIconStarSmall"; // plasmic-import: JBWFCcKZC5oB/icon
import ApoiaseIconHeartSelectedIcon from "./icons/PlasmicIcon__ApoiaseIconHeartSelected"; // plasmic-import: 6RbjXxtuJL3R/icon

export type PlasmicSearch__VariantMembers = {};

export type PlasmicSearch__VariantsArgs = {};
type VariantPropType = keyof PlasmicSearch__VariantsArgs;
export const PlasmicSearch__VariantProps = new Array<VariantPropType>();

export type PlasmicSearch__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSearch__ArgsType;
export const PlasmicSearch__ArgProps = new Array<ArgPropType>("children");

export type PlasmicSearch__OverridesType = {
  dynamicSearch?: p.Flex<"div">;
  inputText?: p.Flex<"input">;
  button?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  campaignDisplay?: p.Flex<"div">;
  tabSelector?: p.Flex<"div">;
  startIcon?: p.Flex<"svg">;
  startIcon2?: p.Flex<"svg">;
  endIcon2?: p.Flex<"svg">;
  startIcon3?: p.Flex<"svg">;
  endIcon3?: p.Flex<"svg">;
  startIcon4?: p.Flex<"svg">;
  endIcon4?: p.Flex<"svg">;
  campaignGallery?: p.Flex<"div">;
  slideBullet?: p.Flex<typeof SlideBullet>;
  searchDropdown?: p.Flex<typeof SearchDropdown>;
};

export interface DefaultSearchProps {
  children?: React.ReactNode;
  className?: string;
}

export const defaultSearch__Args: Partial<PlasmicSearch__ArgsType> = {};

function PlasmicSearch__RenderFunc(props: {
  variants: PlasmicSearch__VariantsArgs;
  args: PlasmicSearch__ArgsType;
  overrides: PlasmicSearch__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultSearch__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const [isDynamicSearchFocusWithin, triggerDynamicSearchFocusWithinProps] =
    useTrigger("useFocusedWithin", {});
  const triggers = {
    focusWithin_dynamicSearch: isDynamicSearchFocusWithin
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"dynamicSearch"}
      data-plasmic-override={overrides.dynamicSearch}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.dynamicSearch
      )}
      data-plasmic-trigger-props={[triggerDynamicSearchFocusWithinProps]}
    >
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___36F6)}
        >
          <SearchInput
            className={classNames("__wab_instance", sty.searchInput__mmovL)}
            inputText={
              <input
                data-plasmic-name={"inputText"}
                data-plasmic-override={overrides.inputText}
                className={classNames(
                  projectcss.all,
                  projectcss.input,
                  sty.inputText
                )}
                placeholder={"Digite o que deseja procurar..." as const}
                size={1 as const}
                type={"text" as const}
                value={"" as const}
              />
            }
          />

          {(triggers.focusWithin_dynamicSearch ? true : true) ? (
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"white" as const}
              endIcon={
                <ApoiaseIconArrowRightIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              }
              showEndIcon={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nMwJj
                )}
              >
                {"Ver todas as campanhas "}
              </div>
            </Button>
          ) : null}
        </p.Stack>
      ) : null}
      {(triggers.focusWithin_dynamicSearch ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"campaignDisplay"}
          data-plasmic-override={overrides.campaignDisplay}
          hasGap={true}
          className={classNames(projectcss.all, sty.campaignDisplay)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"tabSelector"}
            data-plasmic-override={overrides.tabSelector}
            hasGap={true}
            className={classNames(projectcss.all, sty.tabSelector)}
          >
            <TabItem
              className={classNames("__wab_instance", sty.tabItem__yAc2N)}
              color={"whiteWYellow" as const}
              sizes={["small"]}
              startIcon={true}
              startIconSpace={
                <ApoiaseIconStarSmallIcon
                  data-plasmic-name={"startIcon"}
                  data-plasmic-override={overrides.startIcon}
                  className={classNames(projectcss.all, sty.startIcon)}
                  role={"img"}
                />
              }
              title={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rHhLd
                  )}
                >
                  {"Destaque"}
                </div>
              }
            />

            <TabItem
              className={classNames("__wab_instance", sty.tabItem__px8Eb)}
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
              title={"YouTube"}
            />

            <TabItem
              className={classNames("__wab_instance", sty.tabItem___9IO6Q)}
              endIconSpace={
                <svg
                  data-plasmic-name={"endIcon3"}
                  data-plasmic-override={overrides.endIcon3}
                  className={classNames(projectcss.all, sty.endIcon3)}
                  role={"img"}
                />
              }
              sizes={["small"]}
              startIconSpace={
                <svg
                  data-plasmic-name={"startIcon3"}
                  data-plasmic-override={overrides.startIcon3}
                  className={classNames(projectcss.all, sty.startIcon3)}
                  role={"img"}
                />
              }
              title={"Podcasts"}
            />

            <TabItem
              className={classNames("__wab_instance", sty.tabItem__yaRvB)}
              endIconSpace={
                <svg
                  data-plasmic-name={"endIcon4"}
                  data-plasmic-override={overrides.endIcon4}
                  className={classNames(projectcss.all, sty.endIcon4)}
                  role={"img"}
                />
              }
              sizes={["small"]}
              startIconSpace={
                <svg
                  data-plasmic-name={"startIcon4"}
                  data-plasmic-override={overrides.startIcon4}
                  className={classNames(projectcss.all, sty.startIcon4)}
                  role={"img"}
                />
              }
              title={"Animação"}
            />
          </p.Stack>

          {false
            ? p.renderPlasmicSlot({
                defaultContents: null,
                value: args.children
              })
            : null}

          <div
            data-plasmic-name={"campaignGallery"}
            data-plasmic-override={overrides.campaignGallery}
            className={classNames(projectcss.all, sty.campaignGallery)}
          >
            <CampaignCard
              className={classNames("__wab_instance", sty.campaignCard__taxi8)}
              withoutGoal={true}
            />

            <CampaignCard
              className={classNames("__wab_instance", sty.campaignCard__ndui1)}
              metaDescription={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vScc5
                  )}
                >
                  {"arrecadados da meta estabelecida"}
                </div>
              }
              pontual={true}
            />

            <CampaignCard
              className={classNames("__wab_instance", sty.campaignCard__etCz)}
              withCountDays={true}
            />
          </div>

          {true ? (
            <SlideBullet
              data-plasmic-name={"slideBullet"}
              data-plasmic-override={overrides.slideBullet}
              className={classNames("__wab_instance", sty.slideBullet)}
            />
          ) : null}
        </p.Stack>
      ) : null}
      {(triggers.focusWithin_dynamicSearch ? true : true) ? (
        <SearchDropdown
          data-plasmic-name={"searchDropdown"}
          data-plasmic-override={overrides.searchDropdown}
          className={classNames("__wab_instance", sty.searchDropdown)}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  dynamicSearch: [
    "dynamicSearch",
    "inputText",
    "button",
    "svg",
    "campaignDisplay",
    "tabSelector",
    "startIcon",
    "startIcon2",
    "endIcon2",
    "startIcon3",
    "endIcon3",
    "startIcon4",
    "endIcon4",
    "campaignGallery",
    "slideBullet",
    "searchDropdown"
  ],
  inputText: ["inputText"],
  button: ["button", "svg"],
  svg: ["svg"],
  campaignDisplay: [
    "campaignDisplay",
    "tabSelector",
    "startIcon",
    "startIcon2",
    "endIcon2",
    "startIcon3",
    "endIcon3",
    "startIcon4",
    "endIcon4",
    "campaignGallery",
    "slideBullet"
  ],
  tabSelector: [
    "tabSelector",
    "startIcon",
    "startIcon2",
    "endIcon2",
    "startIcon3",
    "endIcon3",
    "startIcon4",
    "endIcon4"
  ],
  startIcon: ["startIcon"],
  startIcon2: ["startIcon2"],
  endIcon2: ["endIcon2"],
  startIcon3: ["startIcon3"],
  endIcon3: ["endIcon3"],
  startIcon4: ["startIcon4"],
  endIcon4: ["endIcon4"],
  campaignGallery: ["campaignGallery"],
  slideBullet: ["slideBullet"],
  searchDropdown: ["searchDropdown"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  dynamicSearch: "div";
  inputText: "input";
  button: typeof Button;
  svg: "svg";
  campaignDisplay: "div";
  tabSelector: "div";
  startIcon: "svg";
  startIcon2: "svg";
  endIcon2: "svg";
  startIcon3: "svg";
  endIcon3: "svg";
  startIcon4: "svg";
  endIcon4: "svg";
  campaignGallery: "div";
  slideBullet: typeof SlideBullet;
  searchDropdown: typeof SearchDropdown;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSearch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSearch__VariantsArgs;
    args?: PlasmicSearch__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSearch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSearch__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSearch__ArgProps,
      internalVariantPropNames: PlasmicSearch__VariantProps
    });

    return PlasmicSearch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dynamicSearch") {
    func.displayName = "PlasmicSearch";
  } else {
    func.displayName = `PlasmicSearch.${nodeName}`;
  }
  return func;
}

export const PlasmicSearch = Object.assign(
  // Top-level PlasmicSearch renders the root element
  makeNodeComponent("dynamicSearch"),
  {
    // Helper components rendering sub-elements
    inputText: makeNodeComponent("inputText"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    campaignDisplay: makeNodeComponent("campaignDisplay"),
    tabSelector: makeNodeComponent("tabSelector"),
    startIcon: makeNodeComponent("startIcon"),
    startIcon2: makeNodeComponent("startIcon2"),
    endIcon2: makeNodeComponent("endIcon2"),
    startIcon3: makeNodeComponent("startIcon3"),
    endIcon3: makeNodeComponent("endIcon3"),
    startIcon4: makeNodeComponent("startIcon4"),
    endIcon4: makeNodeComponent("endIcon4"),
    campaignGallery: makeNodeComponent("campaignGallery"),
    slideBullet: makeNodeComponent("slideBullet"),
    searchDropdown: makeNodeComponent("searchDropdown"),

    // Metadata about props expected for PlasmicSearch
    internalVariantProps: PlasmicSearch__VariantProps,
    internalArgProps: PlasmicSearch__ArgProps
  }
);

export default PlasmicSearch;
/* prettier-ignore-end */
