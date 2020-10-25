/*sortBy
The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
relevancy = articles more closely related to q come first.
popularity = articles from popular sources and publishers come first.
publishedAt = newest articles come first.
Default: publishedAt */

export const sortBy = [
    { index: "", value: "Sort Articles"},
    { index: "publishedAt", value: "Date" },
    { index: "relevancy", value: "Relevance" },
    { index: "popularity", value: "Popularity" },  
  ];