import HeadlineCatagory from '../headline__category/headline-category'
import './drop-down-detail.scss'
import './drop-down-section.scss'

export default function DropDownSection({ articles, category }) {
    // console.log(articles[0].multimedia[0].url);
    // console.log(articles[0].section);
    console.log(category);

    return (
        <>
            <section className="drop-down-section">
                <details>
                    <summary>
                        <HeadlineCatagory section_name={category} />
                    </summary>
                    <article className='article__news__card'>
                        {articles && articles.map((article) => {
                            // console.log(article.multimedia[0]?.url);

                            return (
                                <section className='section__news__card' key={article.url}>
                                    <img className='section__news__card__img' src={article.multimedia[0] ? article.multimedia[0].url : "/newsify_logo_2.svg"} alt="" />
                                    <div className='section__news__card_div'>
                                        <h3 className='section__news__card__headline'>{article.title}</h3>
                                        <p className='section__news__card__text'>{article.abstract}</p>
                                    </div>
                                </section>

                            )
                        })}
                    </article>
                </details>
            </section >

        </>
    )
}
