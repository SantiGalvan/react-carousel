const FigureCard = ({ image, title, onFigureClick, isShow }) => {
    return (
        <div className="figure-card">
            <figure onClick={onFigureClick} className={isShow ? 'active' : ''}>
                <img src={image} alt={title} />
            </figure>
        </div>
    )
}

export default FigureCard;