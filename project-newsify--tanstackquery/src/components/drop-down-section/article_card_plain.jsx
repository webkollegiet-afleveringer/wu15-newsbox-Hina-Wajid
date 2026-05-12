import HeadlineCatagory from '../headline__category/headline-category'
import './article_card_plain.scss'

export default function ArticleCardPlain({ article }) {
    // console.log(articles[0].multimedia[0].url);
    // console.log(articles[0].section);

    return (
        <>
            <section className='section__news__card'>
                {/* {article.multimedia.length && <img src='src={article.multimedia[0]' alt='news' />} */}
                <img className='section__news__card__img' src={article.multimedia[0] ? article.multimedia[0].url : "/newsify_logo_2.svg"} alt="news" />
                <div className='section__news__card_div'>
                    <h3 className='section__news__card__headline'>{article.title}</h3>
                    <p className='section__news__card__text'>{article.abstract}</p>
                </div>
            </section>

        </>
    )
}
