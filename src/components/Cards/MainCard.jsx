import Button from '../Button/Button';
import Badge from '../Badge/Badge';



const MainCard = ({ title, content, tags, image, tagColors, isCarousel }) => {

    return (
        isCarousel ?

            <div className="card-carousel">
                <figure>
                    <img src={image} alt={title} />
                </figure>
                <div className="card-body">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <Button className={'btn'}>Leggi di più</Button>
                    <div className='badge-container'>
                        {tags.map((tag, i) => <Badge tagColors={tagColors} key={i} tag={tag} style={{ backgroundColor: tagColors[tag] }} >{tag}</Badge>)}
                    </div>
                </div>
            </div >

            :

            <div className="card">
                <figure>
                    <img src={image} alt={title} />
                </figure>
                <div className="card-body">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <Button className={'btn'}>Leggi di più</Button>
                    <div className='badge-container'>
                        {tags.map((tag, i) => <Badge tagColors={tagColors} key={i} tag={tag} style={{ backgroundColor: tagColors[tag] }} >{tag}</Badge>)}
                    </div>
                </div>
            </div >
    );
}

export default MainCard;