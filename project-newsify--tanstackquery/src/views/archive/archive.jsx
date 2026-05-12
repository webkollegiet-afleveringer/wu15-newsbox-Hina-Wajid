import ArticleCardPlain from '../../components/drop-down-section/article_card_plain';
import HeadlineCatagory from '../../components/headline__category/headline-category';
import NewsifyLogo from '../../components/newsify-logo/newsify-logo'
import { Link } from 'react-router-dom'
import './archive.scss'
export default function Archive() {

    const displayArchive = JSON.parse(localStorage.getItem("archivedArticle")) || [];
    console.log(displayArchive);

    return (
        <>
            <main>
                {displayArchive && displayArchive.map((element) => {

                    return <section key={Math.random()} className='section__news__card'>
                        {/* {article.multimedia.length && <img src='src={article.multimedia[0]' alt='news' />} */}
                        <img className='section__news__card__img' src={element.img} alt="news" />
                        <div className='section__news__card_div'>
                            <h3 className='section__news__card__headline'>{element.title}</h3>
                            <p className='section__news__card__text'>{element.text}</p>
                        </div>
                    </section>

                }

                )}
            </main>



        </>
    )
}
{/* <div key={Math.random()}><HeadlineCatagory section_name={archi.category}  */ }