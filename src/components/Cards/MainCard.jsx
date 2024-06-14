import Button from '../Button/Button';
import Badge from '../Badge/Badge';



const MainCard = ({ title, content, tags, image, published, tagColors }) => {

    return (
        published &&
        <div className="card">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className="card-body">
                <h2>{title}</h2>
                <p>{content}</p>
                <Button />
                <div className='badge-container'>
                    {tags.map((tag, i) => <Badge tagColors={tagColors} key={i} tag={tag} style={{ backgroundColor: tagColors[tag] }} >{tag}</Badge>)}
                </div>
            </div>
        </div >
    );
}

export default MainCard;