/*sortBy
The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
relevancy = articles more closely related to q come first.
popularity = articles from popular sources and publishers come first.
publishedAt = newest articles come first.
Default: publishedA*/

export const sortBy = [
    { index: "relevancy", value: "Relevancy" },
    { index: "popularity", value: "Popularity" },
    { index: "publishedAt", value: "PublishedAt" }
  ];