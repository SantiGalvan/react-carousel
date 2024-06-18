import { useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import MainCard from '../Cards/MainCard';
import mainStyle from './Main.module.scss';
import { posts } from '../../data/posts.js';
import FigureCard from '../Cards/FigureCard.jsx';
import SectionCards from './SectionCards.jsx';
import SectionTags from './SectionTags.jsx';
import Button from '../Button/Button.jsx';

const tagColors = {
    "Version Control": "#FFC300",
    "Programmazione": "#33FF57",
    "Node.js": "#DAF7A6",
    "CSS": "#3357FF",
    "Web Design": "#FF33A1",
    "API": "#581845",
    "TypeScript": "#C70039",
    "JavaScript": "#FF5733",
    "React": "#900C3F",
    "React Native": "#4A235A",
    "SQL": "#1ABC9C",
    "Database": "#7D3C98",
    "Python": "#F39C12",
    "Docker": "#2E4053",
    "DevOps": "#16A085"
}

const onlyTags = () => {
    let stringTags = ''
    posts.forEach(post => {
        const tag = post.tags.map(tag => tag);
        stringTags += `${tag},`
    });

    const arrayTags = stringTags.split(',');

    const tags = [];
    arrayTags.forEach(tag => {
        if (!tags.includes(tag)) tags.push(tag);
    })

    return tags;
}

const Main = () => {

    // Logica
    const [currentShow, setCurrentShow] = useState(0);
    const { id, title, image, tags, content } = posts[currentShow];

    const changedCard = (direction) => {

        if (direction === 'prev') {
            setCurrentShow(curr => curr !== 0 ? curr - 1 : posts.length - 1);
        }

        if (direction === 'next') {
            setCurrentShow(curr => curr === posts.length - 1 ? 0 : curr + 1)
        }
    }


    // Template
    return (
        <main className={mainStyle.background}>

            {/* Section Carosello */}
            <section id='carousel' >

                <div className={mainStyle.carousel}>
                    <Button
                        isCarousel={true}
                        className={mainStyle.btn}
                        onButtonClick={() => { changedCard('prev') }}>
                        <IoIosArrowDropleftCircle />
                    </Button>


                    <MainCard key={id}
                        title={title}
                        image={image}
                        tags={tags}
                        content={content}
                        tagColors={tagColors}
                        isCarousel={true}
                    />

                    <Button
                        isCarousel={true}
                        className={mainStyle.btn}
                        onButtonClick={() => { changedCard('next') }}>
                        <IoIosArrowDroprightCircle />
                    </Button>
                </div>

                <div className={mainStyle.figureCard}>

                    {posts.map((post, index) =>
                        <FigureCard
                            onFigureClick={() => setCurrentShow(index)}
                            key={post.id}
                            image={post.image}
                            title={post.title}
                            isShow={currentShow === index} />
                    )}

                </div>

            </section>

            {/* Section Tags */}
            <SectionTags tagColors={tagColors} onlyTags={onlyTags} />

            {/* Section Cards */}
            <SectionCards posts={posts} tagColors={tagColors} />

        </main>
    );
}

export default Main;