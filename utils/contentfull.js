import { contentfullConfig } from "./config";

const { baseUrlNews, spaceId, accessToken, environmentId } = contentfullConfig;

export const getEntries = async () => {
  const response = await fetch(
    `${baseUrlNews}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog`,
    // `${baseUrlNews}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&order=fields.slug=${slug}`,
    { cache: "no-store" },
  );
  return response.json();
  // console.log(response.json());
};

export const getEntriesBySlug = async (slug) => {
  const response = await fetch(
    // `${baseUrlNews}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&order=fields.createdAt`,
    `${baseUrlNews}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&fields.slug=${slug}`,
    { cache: "no-store" },
  );
  return response.json();
  // console.log(response.json());
};
