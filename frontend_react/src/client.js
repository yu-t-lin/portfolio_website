import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "p68kot5n",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sktkr6E6NYQ1NN0dv9TeQls7YyVqnSNcKeZLQbY8BkQczNlAERmM8zrM8OcDEGFg2gQXkFSETscogkz984gkbSMsfYPsLl0sb0N35ND5pBcW6ZVT3Xzj8q7STAd75wdFjVOONeN81ewkVgjNluS0ayIbBMhvFpBK7g81xDd4ZZLa5zgz6bfI",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
