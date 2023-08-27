import React from 'react'
import './Portfolio.scss'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import tikktap from "../../img/Projects/tikktap.png";
import portfolio from "../../img/Projects/portfolio.png";
import netflix from "../../img/Projects/netflix.png";
import pulze from "../../img/Projects/pulze.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
const Portfolio = () => {

    const projects = [
        {
            title: "tikk tap",
            thumbnail: tikktap,
            description: "lorem*1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nemo? Inventore aliquid explicabo mollitia repellendus libero sunt unde fugiat nemo perferendis dolore autem quia sit, provident voluptatem atque doloribus cupiditate.",
            urlSite: "https://tikktap.com/",
            urlGit: "https://github.com/noufalva22/tikktap-client",

        },
        {
            title: "Pulze",
            thumbnail: pulze,
            description: "lorem*1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nemo? Inventore aliquid explicabo mollitia repellendus libero sunt unde fugiat nemo perferendis dolore autem quia sit, provident voluptatem atque doloribus cupiditate.",
            urlSite: "https://www.pulze.naufalkareem.com/",
            urlGit: "https://github.com/noufalva22/tikktap-client",

        },
        {
            title: "Netflix Clone",
            thumbnail: netflix,
            description: "lorem*1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nemo? Inventore aliquid explicabo mollitia repellendus libero sunt unde fugiat nemo perferendis dolore autem quia sit, provident voluptatem atque doloribus cupiditate.",
            urlSite: "https://www.netflix.naufalkareem.com/",
            urlGit: "https://github.com/noufalva22/netflix-ui-clone"

        },
        {
            title: "Personal Website",
            thumbnail: portfolio,
            description: "lorem*1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nemo? Inventore aliquid explicabo mollitia repellendus libero sunt unde fugiat nemo perferendis dolore autem quia sit, provident voluptatem atque doloribus cupiditate.",
            urlSite: "http://naufalkareem.com/",
            urlGit: "https://tikktap.com/",

        },

    ]

    return (
        <div className="portfolio">
            <span>Projects</span>
            {/* <span>Portfolio</span> */}
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                {projects.map((project, key) => (
                    <div className="project" key={key}>

                        <SwiperSlide>
                            <img src={project.thumbnail} alt="" />
                            <div className="project-info">
                                <div className="project-info-icon">
                                    <a href={project.urlGit} target="_blank" rel="noopener noreferrer">

                                        <GitHubIcon />
                                    </a>
                                </div>
                                <div className="project-info-icon">
                                    <a href={project.urlSite} target="_blank" rel="noopener noreferrer">
                                        <LanguageIcon />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                    </div>
                ))}


            </Swiper>
        </div>
    )
}

export default Portfolio