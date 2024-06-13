// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Navigation → Nav Items*
 */
export interface NavigationDocumentDataNavItemsItem {
  /**
   * Nav Label field in *Navigation → Nav Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.nav_items[].nav_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nav_label: prismic.KeyTextField;

  /**
   * Nav Link field in *Navigation → Nav Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.nav_items[].nav_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  nav_link: prismic.LinkField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Nav Items field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.nav_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav_items: prismic.GroupField<Simplify<NavigationDocumentDataNavItemsItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice = ServicesSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | HomepageDocument
  | NavigationDocument
  | PageDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Eyebrow Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.eyebrow_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrow_heading: prismic.KeyTextField;

  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * description field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * CTA Label field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cta_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * CTA Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Services → Default → Primary → Services*
 */
export interface ServicesSliceDefaultPrimaryServicesItem {
  /**
   * Number field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[].number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField;

  /**
   * Title field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Link field in *Services → Default → Primary → Services*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *Services → Default → Primary*
 */
export interface ServicesSliceDefaultPrimary {
  /**
   * Eyebrow Heading field in *Services → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.eyebrow_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrow_heading: prismic.KeyTextField;

  /**
   * Heading field in *Services → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *Services → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Services field in *Services → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: services.default.primary.services[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<
    Simplify<ServicesSliceDefaultPrimaryServicesItem>
  >;
}

/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Services*
 */
type ServicesSliceVariation = ServicesSliceDefault;

/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: Services
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSlice = prismic.SharedSlice<
  "services",
  ServicesSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataNavItemsItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ServicesSlice,
      ServicesSliceDefaultPrimaryServicesItem,
      ServicesSliceDefaultPrimary,
      ServicesSliceVariation,
      ServicesSliceDefault,
    };
  }
}
