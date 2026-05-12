import './headline-category.scss'

export default function HeadlineCatagory({ section_name }) {
    return (
        <div className='headline-category'><img src="/newsify_logo_3.svg" alt="" />
            <span className='headline-category-name'>{section_name}</span></div>
    )
}