import { useRef, useState } from 'react';
import HeadlineCatagory from '../headline__category/headline-category'
import './article_card.scss'
import BookmarkIcon from '../icons/bookmark-icon';
import { useLocation } from 'react-router-dom';
export default function ArticleCard({ article, category }) {

    const [diff, setDiff] = useState(0)
    const articleRef = useRef();
    const articleLocation = useLocation();

    function handleTouchStart(event) {
        console.log("Start", event.touches[0].screenX);  /* where user touch start first time */
        setDiff(event.touches[0].screenX)
        console.log("difference", diff);
    }

    function handleTouchEnd(event) {

        console.log("End", event.changedTouches[0].screenX);
        // articleRef.current.style.transition = "all .5s ease-in-out";

        /*------ swipe to show bookmark */
        if (diff > event.changedTouches[0].screenX) {
            const distance = diff - event.changedTouches[0].screenX;
            // articleRef.current.style.transform = `translateX(-${distance}px)`;
            articleRef.current.style.transform = "translateX(-98px)";
            window.setTimeout(() => { articleRef.current.style.transform = "translateX(0px)" }, 500)

            /* ----------------adding swiped article to archive */

            const data = JSON.parse(localStorage.getItem("archivedArticle")) || [];
            let article = { "title": articleRef.current.dataset.title, "image": articleRef.current.dataset.img, "text": articleRef.current.dataset.text, "category": articleRef.current.dataset.category, }


            JSON.parse(data.push(article));
            localStorage.setItem("archivedArticle", JSON.stringify(data));

        }
        else {
            // articleRef.current.style.transform = "translateX(0px)"; /* manually swipe back to original place */
        }
    }
    return (
        <>
            <div className='flex-display article__container' >

                <article ref={articleRef} className='articleCard' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
                    data-title={article.title} data-img={article.multimedia[0] ? article.multimedia[0].url : "/newsify_logo_2.svg"} data-text={article.abstract} data-category={category}>
                    {/* {article.multimedia.length && <img src='src={article.multimedia[0]' alt='news' />} */}
                    <img className='articleCard__img' src={article.multimedia[0] ? article.multimedia[0].url : "/newsify_logo_2.svg"} alt="news" />
                    <div className='articleCard_div'>
                        <h3 className='articleCard__heading'>{article.title}</h3>
                        <p className='articleCard__text'>{article.abstract}</p>
                    </div>
                </article>

                <div className='article__iconcontainer'><BookmarkIcon /></div>
            </div>
        </>
    )
}

// console.log(articles[0].multimedia[0].url);
// console.log(articles[0].section);
