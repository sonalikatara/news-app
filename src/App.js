import { useState } from "react";
import theme from "./theme";
import './App.css';
import { ThemeProvider } from "@material-ui/styles";

import Layout from "./components/Layout";


function App() {
  const [news, setNews ] = useState(null);

  // searchNews gets the search results on the searchQuery query sorted by SortBy Top headlines 
  // if there is no search query it gets the top headlines

  const searchNews = async (searchQuery, sortBy) => {   
      //console.log("searchQuery :", searchQuery, "sortBy : ", sortBy,"newsUrl ::", newsUrl);
      if(searchQuery && searchQuery.length > 0 ){
        const everythingNewsUrl =
        `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=${sortBy}&language=en&apiKey=1281b5754f724b7081e105c2e75f8d67`;
        await fetch(everythingNewsUrl)
        .then((response) => response.json())
        .then((data) => setNews(data.articles))
        .catch((error) => console.log("Authorization failed : " + error.message));
      } else {
        setNews([]);
      }
     
  };
  
  /*let initialNews =  [
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Manish Singh",
    "title": "Indian startups explore forming an alliance and alternative app store to fight Google’s ‘monopoly’",
    "description": "Google, which reaches more internet users than any other firm in India and commands 99% of the nation’s smartphone market, has stumbled upon an odd challenge in the world’s second largest internet market: Scores of top local entrepreneurs. Dozens of top start…",
    "url": "https://techcrunch.com/2020/09/30/indian-startups-explore-forming-an-alliance-and-alternative-app-store-to-fight-googles-monopoly/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/09/GettyImages-631364250.jpg?w=600",
    "publishedAt": "2020-10-01T01:42:44Z",
    "content": "Google, which reaches more internet users than any other firm in India and commands 99% of the nations smartphone market, has stumbled upon an odd challenge in the worlds second largest internet mark… [+5311 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Manish Singh",
    "title": "Uber is hiring hundreds of engineers in India to cut costs",
    "description": "Uber said on Thursday it is working to hire 225 engineers in India, strengthening its tech team in the key overseas market months after it eliminated thousands of jobs globally. The ride-hailing firm, which competes with Ola in India, said today it has hired …",
    "url": "http://techcrunch.com/2020/10/15/uber-is-hiring-hundreds-of-engineers-in-india-to-cut-costs/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/02/GettyImages-1151684401.jpg?w=600",
    "publishedAt": "2020-10-15T11:08:40Z",
    "content": "Uber said on Thursday it is working to hire 225 engineers in India, strengthening its tech team in the key overseas market months after it eliminated thousands of jobs globally.\r\nThe ride-hailing fir… [+1718 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Manish Singh",
    "title": "Smartphone shipments rebound to an all-time high in India",
    "description": "Smartphone shipments reached an all-time high in India in the quarter that ended in September this year as the world’s second largest handset market remained fully open during the period after initial lockdowns due to the coronavirus, according to a new repor…",
    "url": "http://techcrunch.com/2020/10/22/smartphone-shipments-rebound-to-hit-an-all-time-high-in-india/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/GettyImages-691021198.jpg?w=600",
    "publishedAt": "2020-10-22T10:44:13Z",
    "content": "Smartphone shipments reached an all-time high in India in the quarter that ended in September this year as the worlds second largest handset market remained fully open during the period after initial… [+2452 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Marina Harss",
    "title": "In India, a Dance Haven Shuts Out the World",
    "description": "With the pandemic, Nrityagram, near Bangalore, has become a more self-contained version of itself: a refuge, with a single-minded focus on classical Indian dance.",
    "url": "https://www.nytimes.com/2020/10/07/arts/dance/india-nrityagram-virus.html",
    "urlToImage": "https://static01.nyt.com/images/2020/10/11/arts/11nrityagram-9/merlin_177860013_287213f3-33d0-4fde-9adc-8b4d500943b6-facebookJumbo.jpg",
    "publishedAt": "2020-10-07T09:00:41Z",
    "content": "These rituals are part of the practice, part of giving back to the guru, or teacher, and to the school. And its part of their training, said Lynne Fernandez, Nrityagrams executive director. Next, the… [+952 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Manish Singh",
    "title": "WarnerMedia to discontinue HBO and WB TV channels in India, and select other South Asia markets",
    "description": "WarnerMedia will discontinue HBO and WB TV channels in India, Pakistan, Maldives, and Bangladesh later this year as the entertainment conglomerate struggles to find a sustainable business model in South Asian despite operating in the region for over a decade.…",
    "url": "http://techcrunch.com/2020/10/15/warnermedia-to-discontinue-hbo-and-wb-tv-channels-in-india-and-select-other-south-asia-markets/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/GettyImages-634029408.jpg?w=600",
    "publishedAt": "2020-10-15T08:48:11Z",
    "content": "WarnerMedia will discontinue HBO and WB TV channels in India, Pakistan, Maldives, and Bangladesh later this year as the entertainment conglomerate struggles to find a sustainable business model in So… [+1749 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Sameer Yasir",
    "title": "India’s Covid-19 Death Toll Passes 100,000",
    "description": "Only the United States and Brazil have reported more deaths from the coronavirus. Despite its climbing numbers, India plans to lift more restrictions.",
    "url": "https://www.nytimes.com/2020/10/03/world/asia/india-coronavirus-deaths.html",
    "urlToImage": "https://static01.nyt.com/images/2020/10/03/world/03virus-india/03virus-india-facebookJumbo.jpg",
    "publishedAt": "2020-10-03T08:06:58Z",
    "content": "SRINAGAR, Kashmir More than 100,000 people in India have died from the coronavirus, the government said on Saturday, even as officials plan to lift more restrictions in hopes of reviving the crippled… [+835 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "The New York Times",
    "title": "Pandemic’s Toll Is Worse Than the Numbers Suggest, Study Says",
    "description": "Argentina, Brazil, Britain, France, India, Russia and the United States have helped push the global total of coronavirus cases to more than 40.7 million.",
    "url": "https://www.nytimes.com/live/2020/10/21/world/covid-19-coronavirus-updates",
    "urlToImage": "https://static01.nyt.com/images/2020/10/20/multimedia/20virus-briefing-russia/20virus-briefing-russia-facebookJumbo.jpg",
    "publishedAt": "2020-10-21T09:56:35Z",
    "content": "LiveUpdated Oct. 21, 2020, 6:01 a.m. ET\r\nOct. 21, 2020, 6:01 a.m. ET\r\nArgentina, Brazil, Britain, France, India, Russia and the United States have helped push the global total of coronavirus cases to… [+22109 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": null,
    "title": "Coronavirus: 'I caught Covid at my uncle's funeral'",
    "description": "A man in India who spread coronavirus after catching it at a funeral reflects on his decision to attend.",
    "url": "https://www.bbc.co.uk/news/av/world-54620048",
    "urlToImage": "https://ichef.bbci.co.uk/images/ic/400xn/p08vy5rz.jpg",
    "publishedAt": "2020-10-21T23:13:06Z",
    "content": "Binu, a construction worker in the southern Indian state of Kerala, sorely regrets attending his uncle's funeral. He caught Covid-19 at the ceremony and spread it to at least another eight people.\r\nD… [+382 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Reuters Staff",
    "title": "India appoints Dinesh Khara as chairman of State Bank of India - Reuters India",
    "description": "The Indian government on Tuesday appointed Dinesh Khara as chairman of the State Bank of India (SBI), the country's top lender, for three years, effective Oct. 7.",
    "url": "https://in.reuters.com/article/state-bank-india-chairman-idINKBN26R2XY",
    "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20201006&t=2&i=1536400934&r=LYNXMPEG951OZ&w=800",
    "publishedAt": "2020-10-06T16:32:00Z",
    "content": "By Reuters Staff\r\nFILE PHOTO: People crowd the entrance of the State Bank of India branch to deposit or exchange their old high denomination banknotes in Beawar city in the desert state of Rajasthan,… [+477 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Covid: Brazil's coronavirus cases pass five million",
    "description": "Brazil is the third worst-hit country, after the US and India, with deaths approaching 150,000.",
    "url": "https://www.bbc.co.uk/news/world-latin-america-54447346",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2EAE/production/_114805911_tv063683887.jpg",
    "publishedAt": "2020-10-07T22:02:25Z",
    "content": "image captionThe streets of São Paulo remain busy with shoppers\r\nConfirmed cases of coronavirus in Brazil have passed five million, with deaths in the country approaching 150,000, officials say. \r\nBr… [+1444 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": null,
    "title": "India's 'loudspeaker and motorbike schools' beat Covid fears",
    "description": "Many schools in India remain shut due to the pandemic, but some teachers are being creative.",
    "url": "https://www.bbc.co.uk/news/world-asia-india-54462963",
    "urlToImage": null,
    "publishedAt": "2020-10-11T23:58:29Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Pranshu Verma",
    "title": "In Wake of Recent India-China Conflict, U.S. Sees Opportunity",
    "description": "India’s border dispute with China has accelerated its relations with the United States. Others worry that warming ties ignore India’s persecution of Muslims.",
    "url": "https://www.nytimes.com/2020/10/03/world/asia/india-china-trump.html",
    "urlToImage": "https://static01.nyt.com/images/2020/10/02/us/politics/00dc-diplo-india1/00dc-diplo-india1-facebookJumbo.jpg",
    "publishedAt": "2020-10-03T14:05:06Z",
    "content": "Nobodys backing down, theyre going to go through the winter like this, said Vikram J. Singh, senior adviser to the Asia program at the United States Institute of Peace. Now youve got a situation wher… [+1773 chars]"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "Manish Singh",
    "title": "Google delays mandating Play Store’s 30% cut in India to April 2022",
    "description": "Google is postponing the enforcement of its new Play Store billing policy in India to April 2022, days after more than 150 startups in the world’s second largest internet market forged an informal coalition to express concerns over the 30% charge the Android-…",
    "url": "http://feedproxy.google.com/~r/Techcrunch/~3/0nmQOggvIK0/",
    "urlToImage": null,
    "publishedAt": "2020-10-05T03:03:57Z",
    "content": null
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Reuters Staff",
    "title": "India extends suspension of bankruptcy filings - Reuters India",
    "description": "The Indian government on Thursday said it had extended a suspension of bankruptcy filings until December, a decision aimed at helping businesses stay afloat amid the coronavirus pandemic.",
    "url": "https://in.reuters.com/article/india-bankruptcy-idINKCN26F2UA",
    "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20200924&t=2&i=1534794975&r=LYNXNPEG8N1LI&w=800",
    "publishedAt": "2020-09-24T16:06:00Z",
    "content": "By Reuters Staff\r\nIndia's Finance Minister Nirmala Sitharaman and the Reserve Bank of India (RBI) Governor Shaktikanta Das arrive to attend the RBI's central board meeting in New Delhi, July 8, 2019.… [+845 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "",
    "title": "India fwd/annualised dlr premia-Oct 5 - Reuters India",
    "description": "Cash Spot Cash Tom Tom Next ----------------------------------------------------------------- Bid/Ask Bid/Ask Bid/Ask (in IST) 1010 00.50/02.50 00.25/01.25 00.25/01.25 01.25% 01.25% 01.25% (Oct 1) 1000 01.50/04.50 01.25/03.25 00.25/01.25 01.49% 01.55% 01.24% …",
    "url": "https://in.reuters.com/article/market-india-dlr-premia-idINL4N2GW0VT",
    "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    "publishedAt": "2020-10-05T04:45:00Z",
    "content": null
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "",
    "title": "India Ratings for Indian debt instruments – Oct 5 - Reuters India",
    "description": "Oct 5 - Below are the ratings awarded by India Ratings and Research Private Ltd (India Ratings), formerly known as Fitch Ratings India for local debt instruments as of October 1, 2020. COMPANY INSTRUMENT RATING AMOUNT MOVEMENT (RS.MLN) ------ ---------- -----…",
    "url": "https://www.reuters.com/article/india-ratings-idINL4N2GW1ML",
    "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    "publishedAt": "2020-10-05T08:35:00Z",
    "content": null
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "",
    "title": "India Ratings for Indian debt instruments – Oct 16 - Reuters India",
    "description": "Oct 16 - Below are the ratings awarded by India Ratings and Research Private Ltd (India Ratings), formerly known as Fitch Ratings India for local debt instruments as of October 15, 2020. COMPANY INSTRUMENT RATING AMOUNT MOVEMENT (RS.MLN) ------ ---------- ---…",
    "url": "https://www.reuters.com/article/india-ratings-idINL4N2H71X3",
    "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    "publishedAt": "2020-10-16T07:22:00Z",
    "content": null
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Reuters Staff",
    "title": "Morning News Call - India, October 19 - Reuters India",
    "description": "To access a PDF version of this newsletter, please click here https://share.refinitiv.com/assets/newsletters/Indiamorning/MNC_IN_10192020.pdf If you would like to receive this newsletter via email, please register at: https://solutions.refinitiv.com/MNCIndiaS…",
    "url": "https://in.reuters.com/article/india-morningcall-idINL4N2HA154",
    "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    "publishedAt": "2020-10-19T03:36:00Z",
    "content": "By Reuters Staff\r\nTo access a PDF version of this newsletter, please click here here\r\nIf you would like to receive this newsletter via email, please register at:\r\nhere\r\nFACTORS TO WATCH\r\n 11:00 am: B… [+6282 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Reuters Staff",
    "title": "Morning News Call - India, October 16 - Reuters India",
    "description": "To access a PDF version of this newsletter, please click here https://share.refinitiv.com/assets/newsletters/Indiamorning/MNC_IN_10162020.pdf If you would like to receive this newsletter via email, please register at: https://solutions.refinitiv.com/MNCIndiaS…",
    "url": "https://www.reuters.com/article/india-morningcall-idINL4N2H70WB",
    "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    "publishedAt": "2020-10-16T03:17:00Z",
    "content": "By Reuters Staff\r\nTo access a PDF version of this newsletter, please click here here\r\nIf you would like to receive this newsletter via email, please register at:\r\nhere\r\nFACTORS TO WATCH\r\n 9:30 am: SI… [+5566 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "",
    "title": "India fwd/annualised dlr premia-Oct 9 - Reuters India",
    "description": "Cash Spot Cash Tom Tom Next ----------------------------------------------------------------- Bid/Ask Bid/Ask Bid/Ask (in IST) 1005 01.25/04.25 01.25/04.25 N/A 01.56% 01.56% N/A (Oct 8) 1010 01.50/04.50 00.25/01.25 01.25/03.25 01.49% 01.24% 01.56% -----------…",
    "url": "https://in.reuters.com/article/market-india-dlr-premia-idINL4N2H00ZS",
    "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    "publishedAt": "2020-10-09T04:46:00Z",
    "content": null
    }
    ]*/
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <Layout searchNews={searchNews} news={news}/>
    </ThemeProvider>
  </div>
  );
}

export default App;
