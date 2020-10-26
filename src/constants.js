/*sortBy
The order to sort the articles in. 
relevancy = articles more closely related to q come first.
popularity = articles from popular sources and publishers come first.
publishedAt = newest articles come first.
default/none : publishedAt
 */

export const sortBy = [
    { index: "none", value: "None"},
    { index: "publishedAt", value: "Date" },
    { index: "relevancy", value: "Relevance" },
    { index: "popularity", value: "Popularity" },  
  ];