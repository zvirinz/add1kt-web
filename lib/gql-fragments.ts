import { gql } from 'graphql-request';

export const FULL_POST_DATA = gql`
  fragment FullPostData on Post {
    slug
    title
    coverImage {
      url
      width
      height
    }
    featured
    body {
      json
      links {
        assets {
          block {
            sys {
              id
            }
            url
            description
            width
            height
          }
        }
      }
    }
    authorCollection {
      items {
        name
        slug
        picture {
          url
          width
          height
        }
      }
    }
    tagsCollection {
      items {
        title
        slug
      }
    }
    sys {
      firstPublishedAt
    }
    relatedPostsCollection {
      items {
        slug
      }
    }
  }
`;

export const SHORT_POST_DATA = gql`
  fragment ShortPostData on Post {
    slug
    title
    coverImage {
      url
      width
      height
    }
    featured
    body {
      json
    }
    authorCollection {
      items {
        name
        slug
        picture {
          url
          width
          height
        }
      }
    }
    tagsCollection {
      items {
        title
        slug
      }
    }
    sys {
      firstPublishedAt
    }
  }
`;

export const BASIC_POST_DATA = gql`
  fragment BasicPostData on Post {
    slug
    title
    coverImage {
      url
      width
      height
    }
    featured
    authorCollection {
      items {
        name
        slug
        picture {
          url
          width
          height
        }
      }
    }
    tagsCollection {
      items {
        title
        slug
      }
    }
    sys {
      firstPublishedAt
    }
  }
`;

export const HOMEPAGE_DATA = gql`
  fragment HomepageData on Homepage {
    title
    body {
      json
    }
    coverImage {
      url
      width
      height
    }
  }
`;

export const AUTHOR_DATA = gql`
  fragment AuthorData on Author {
    slug
    name
    subtitle
    social
    picture {
      url
      width
      height
    }
    coverImage {
      url
      width
      height
    }
  }
`;

export const TAG_DATA = gql`
  fragment TagData on Tag {
    slug
    title
    description
    coverImage {
      url
      width
      height
    }
  }
`;
export const PAGE_DATA = gql`
  fragment PageData on Page {
    slug
    title
    body {
      json
      links {
        assets {
          block {
            sys {
              id
            }
            url
            description
            width
            height
          }
        }
      }
    }
  }
`;