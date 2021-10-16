/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      firstname
      lastname
      address
      email
      intro
      createdAt
      updatedAt
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        address
        email
        intro
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResume = /* GraphQL */ `
  query GetResume($id: ID!) {
    getResume(id: $id) {
      id
      title
      contents
      company
      address
      fromdate
      todate
      link
      techstack
      category {
        category
      }
      createdAt
      updatedAt
    }
  }
`;
export const listResumes = /* GraphQL */ `
  query ListResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        contents
        company
        address
        fromdate
        todate
        link
        techstack
        category {
          category
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
