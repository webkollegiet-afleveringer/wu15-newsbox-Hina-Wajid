import HeadlineCatagory from '../headline__category/headline-category'
import './drop-down-section.scss'
export default function DropDownTemplate({ articles }) {
    console.log(articles[0].section);

    return (
        <>
            <section className="drop-down-section">
                <details>
                    <summary>
                        <HeadlineCatagory section_name={articles[0].section} />
                    </summary>


                    <ul>{articles && articles.map((article) => {
                        return (
                            <li key={Math.random()}>
                                <section className='section__news__card'>
                                    <img src="/rectangle_5.png" alt="" />
                                    <h3 className='section__news__card__headline'>{article.title}</h3>
                                    <p>{article.abstract}</p>
                                </section>
                            </li>
                        )
                    })}
                    </ul>
                </details>

                <details>
                    <summary>Health</summary>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque enim quo laudantium ab eum
                        facilis, assumenda soluta ducimus eligendi ullam maiores voluptates omnis doloremque aliquid sed
                        inventore expedita totam.</p>
                </details>
                <details>
                    <summary>Travel</summary>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque enim quo laudantium ab eum
                        facilis, assumenda soluta ducimus eligendi ullam maiores voluptates omnis doloremque aliquid sed
                        inventore expedita totam.</p>
                </details>
                <details>
                    <summary>Europe</summary>

                    <p>Projex-Tec Co. is dedicated to satisfying our customers by providing quality products & services
                        on time & striving towards continual improvement. Our Management is committed to providing
                        Supply, Installation, Testing, and Commissioning of Electromechanical works to its clients for
                        various projects and has established Quality Assurance / Quality Control Programs in a manner
                        that strives to comply with ISO 9001:2008. Projex-Tec Co. achieves the highest quality standards
                        throughout the performance of its activities in meeting all the specifications and procedures of
                        customer satisfaction and projects are executed in a manner that emphasizes safety, quality, and
                        maximum cost-effectiveness.</p>
                </details>
                <details>
                    <summary>Business</summary>

                    <p>Projex-Tec Co. is dedicated to satisfying our customers by providing quality products & services
                        on time & striving towards continual improvement. Our Management is committed to providing
                        Supply, Installation, Testing, and Commissioning of Electromechanical works to its clients for
                        various projects and has established Quality Assurance / Quality Control Programs in a manner
                        that strives to comply with ISO 9001:2008. Projex-Tec Co. achieves the highest quality standards
                        throughout the performance of its activities in meeting all the specifications and procedures of
                        customer satisfaction and projects are executed in a manner that emphasizes safety, quality, and
                        maximum cost-effectiveness.</p>
                </details>
            </section>

        </>
    )
}