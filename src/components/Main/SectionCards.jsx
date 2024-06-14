import MainCard from '../Cards/MainCard';
import mainStyle from './Main.module.scss';

const SectionCards = ({ posts, tagColors }) => {
    return (
        <section id='cards' className={mainStyle.row}>
            {posts.map(post =>
            (
                post.published &&
                <MainCard key={post.id}
                    title={post.title}
                    image={post.image}
                    tags={post.tags}
                    content={post.content}
                    tagColors={tagColors}
                />
            )
            )}
        </section>
    )
}

export default SectionCards;