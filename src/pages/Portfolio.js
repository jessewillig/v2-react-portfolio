import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import PortfolioCard from "../components/PortfolioCard";
import CardContainer from "../components/CardContainer";
import portfolioData from "../utils/portfolio";
import BackgroundImage from "../components/BackgroundImage";
import imageUrl from "../images/backgroundImage.jpg";

function Portfolio () {
    return (
        <div>
        <BackgroundImage image={imageUrl} >
            <Nav />
            <Header padding={70} title="Portfolio" />
            <CardContainer>
                <div className="uk-child-width-1-2@m uk-grid-match" uk-grid="true" id="portfolio-section" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: false">
                    {
                        portfolioData.map((el, index) => {
                            return <PortfolioCard
                                title={el.title}
                                about={el.about}
                                repoUrl={el.repoUrl}
                                siteUrl={el.siteUrl}
                                imgUrl={el.imgUrl}
                                key={index}
                            />
                        })
                    }
                </div>
            </CardContainer>
        </BackgroundImage>
        </div>
    )
};

export default Portfolio;