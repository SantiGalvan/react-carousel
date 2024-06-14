import mainStyle from './Main.module.scss';
import Badge from '../Badge/Badge';

const SectionTags = ({ tagColors, onlyTags }) => {
    return (
        <section id='tags' className={mainStyle.row}>

            {onlyTags().map((tag, i) =>
                <Badge
                    tagColors={tagColors}
                    key={i}
                    tag={tag}
                    style={{ backgroundColor: tagColors[tag] }} >{tag}</Badge>)}

        </section>
    )
}

export default SectionTags;