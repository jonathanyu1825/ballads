import BlackBackground from "../BlackBackground";
import ContentHolder from "../ContentHolder";
import "./ArticleHomePage.css";

export default function ArticleHomePage() {
  return (
    <ContentHolder
      margin="40px auto"
      width="660px"
      height="100%"
      flexCenter={false}
    >
      <BlackBackground />
      <div id = "article-holder">
        <p class="article-title"> • 10/29/25 - Welcome to Ballads </p>
        <p class="article-title"> • 10/29/25 - Welcome to Ballads </p>
        <p class="article-title"> • 10/29/25 - Welcome to Ballads </p>
        <p class="article-title"> • 10/29/25 - Welcome to Ballads </p>
        <p class="article-title"> • 10/29/25 - Welcome to Ballads </p>
        <p class="article-title"> • 10/29/25 - Welcome to Ballads </p>
      </div>
    </ContentHolder>
  );
}
