import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
    {
        image: "https://images.pexels.com/photos/3585000/pexels-photo-3585000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        category: 'Front-End',
        title: 'Movie Finder',
        live: "https://movie-app-yassine.herokuapp.com/",
        github: "https://github.com/SalhiYassine/movie-api"
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show',
        live: "http://blah.com",
        github: "http://blah.com"
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show',
        live: "http://blah.com",
        github: "http://blah.com"
    }
]

class PortfolioList extends Component {
    render() {
        const { column, styevariation } = this.props;
        const list = PortfolioListContent.slice(0, this.props.item);
        return (
            <React.Fragment>
                {list.map((value, index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <img className="w-100 h-100" src={value.image} alt="" />
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href={value.live} >{value.title}</a></h4>
                                    <div className="d-flex justify-content-around">
                                        <div className="portfolio-button">
                                            <a className="rn-btn" href={value.live} >View Live</a>
                                        </div>
                                        <div className="portfolio-button">
                                            <a className="rn-btn" href={value.github} >View Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to="/portfolio-details"></Link>
                        </div>
                    </div>
                ))}

            </React.Fragment>
        )
    }
}
export default PortfolioList;