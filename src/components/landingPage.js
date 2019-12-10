import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'


class Landing extends Component {
    render() {
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src= "https://res.cloudinary.com/bampow/image/upload/v1575600655/Portfolio_Image.png"
                        alt= "avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p> Angular | React | Javascript | Typescript | .NET CORE C# Web API | Python | Django | SQL | AWS | Azure  </p>
                            <div className="social-links">
                                {/* Github */}
                                <a href="hhtp://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;