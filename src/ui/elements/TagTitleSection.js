import "../styles/elements/tag-title-section.styles.css"

export const TagTitleSection = (props) => {
    let { title } = props

    return (
        <div className="container-tag-title">
            <div className="tag-title-section">
                <p> {title} </p>
            </div>
        </div>
    )
}