
import HeadlineCatagory from '../headline__category/headline-category'
import ArticleCard from './article_card';
import ArticleCardPlain from './article_card_plain';
import './drop-down-detail.scss'


export default function DropDownDetail({ articles, category }) {
    // console.log(articles[0].multimedia[0].url);
    // console.log(articles[0].section);


    return (
        <>
            <details>
                <summary>
                    <HeadlineCatagory section_name={category} />
                </summary>

                {articles && articles.map((article) => {
                    return (
                        < ArticleCard key={article.url} article={article} section_name={category} />

                    )
                })}
            </details>

        </>
    )
}
