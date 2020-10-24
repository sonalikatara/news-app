export default function({news}){
    return(
        <>
          {news && news.map(article=><div>{article.title}</div>) }
        </>
    );
}