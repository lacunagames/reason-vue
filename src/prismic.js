import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({ endpoint: "https://good-thing.cdn.prismic.io/api/v2" });

export default prismic;