// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uHRmC1SQrkfdMqVjfGKf9u
import * as React from "react";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: OREVbGCcgN/codeComponent
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css"; // plasmic-import: qF0uJxFztB/codeComponent
import { ParallaxProviderWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: L6MfauX2Cw/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
  parallaxProviderWrapperProps?: Partial<
    Omit<React.ComponentProps<typeof ParallaxProviderWrapper>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    cmsCredentialsProviderProps,
    embedCssProps,
    parallaxProviderWrapperProps
  } = props;

  return (
    <CmsCredentialsProvider
      {...cmsCredentialsProviderProps}
      databaseId={
        cmsCredentialsProviderProps &&
        "databaseId" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseId!
          : ("jMa2ti8BTfdm94tkEQZPpe" as const)
      }
      databaseToken={
        cmsCredentialsProviderProps &&
        "databaseToken" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseToken!
          : ("wOqJh6PdmqS6SGNMUSy8lPgJGYMPSYFmRw06GGEHRIsjTxQtwZ9lRke6DG71FDG2PWl2nCdCOAMCTj31IVw" as const)
      }
      host={
        cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.host!
          : ("https://studio.plasmic.app" as const)
      }
      locale={
        cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.locale!
          : ("" as const)
      }
    >
      <EmbedCss
        {...embedCssProps}
        css={
          embedCssProps && "css" in embedCssProps
            ? embedCssProps.css!
            : ("/* CSS snippet */\n.ant-tabs-tab{\n}" as const)
        }
      >
        <ParallaxProviderWrapper
          {...parallaxProviderWrapperProps}
          scrollAxis={
            parallaxProviderWrapperProps &&
            "scrollAxis" in parallaxProviderWrapperProps
              ? parallaxProviderWrapperProps.scrollAxis!
              : undefined
          }
        >
          {children}
        </ParallaxProviderWrapper>
      </EmbedCss>
    </CmsCredentialsProvider>
  );
}
