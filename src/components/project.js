import React, { Component } from 'react';
import {Tab, Tabs, Grid, Button, Cell, Card, CardText, CardTitle, CardActions, CardMenu, IconButton} from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 3}
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return (
                /*Angular*/
        <div className="projects-grid">
            {/*Project 1*/}    
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background:'url(https://www.logolynx.com/images/logolynx/a8/a8785a3e95ae05170beea0e81715bb9c.png) center / cover'}}></CardTitle>
                <CardText>
                    Ameriprise Financial, Inc. is an American diversified financial services company. I was a part of a large team building a web app that dealt with unwrapping a bulk amount brokerage accounts into managed accounts for the clients. I was solely responsible for the cash, margin, and mmkt movment algorithm for this system.
                    This process was automated through our app and it was built with Angular on the front end, .NET Web API, and SQL on the backend.
                    This process allowed for automation of flow for advisors and compliance teams at Ameriprise.
                </CardText>
                <CardActions border>
                    {/* eslint-disable-next-line */}
                    <Button colored><a>Confidential</a></Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            {/*Project 2*/}    
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background:'url(https://res.cloudinary.com/bampow/image/upload/v1576122171/Epic.png) center / cover'}}></CardTitle>
                <CardText>
                    Epic is a electronic medical record. These records are used when documenting patient history and patient visits. I was responsible for go-live implemetnation and immediate bug fixes that doctors may have for intial go-live process.
                    They deploy single page apps on hospitals throughout the world. The app is built with angular on the front end, .NET Web API, and mumps and SQL backend.
                </CardText>
                <CardActions border>
                    {/* eslint-disable-next-line */}
                    <Button colored><a>Confidential</a></Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            {/*Project 3*/}
            {/*    
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background:'url(https://res.cloudinary.com/bampow/image/upload/v1576122171/Epic.png) center / cover'}}>React Project #3</CardTitle>
                <CardText>
                    Lorem Ipsum
                </CardText>
                <CardActions border>
                    <Button colored>Confidential</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            */} 
        </div>
            )
        }
        /*.NET*/
        else if(this.state.activeTab ===1){
            return (
                <div className="projects-grid">
                {/*Project 1*/}    
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://res.cloudinary.com/bampow/image/upload/v1576115822/Encode-Decode._screenshots.png) center / cover'}}>Encode/Decode</CardTitle>
                    <CardText>
                        I wrote an ASP.NET MVC web app that is hosted on my local that converts an integer into a special text encoding (14 bit from Int to Hex) and can also convert encoded values back into the original integer. 
                        The decoded function accepts a high and lo byte in the 14-bit range [-8192, +8191] and returns a 4 character string
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/bampowbam/Encode-Decode" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                {/*Project 2*/}    
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://res.cloudinary.com/bampow/image/upload/v1576118557/Pencil_Objec_Screenshot.png) center / cover'}}></CardTitle>
                    <CardText>
                        I made a console app that has three two main objects, paper and pencil. The pencil has an eraser that degrades to completion and can only be sharpened a finite amount of times. 
                        Everytime you write your point degradation goes down and then you will need to sharpen your pencil before using it again and that also will lead to shortening your pencil length. 
                        You can edit what you have written on the paper by erasing and then you can write on top of where you erased. It is a pretty fun console app to mess with. Please check it out.                     </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/bampowbam/PencilObject" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                {/*Project 3*/}    
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(data:image/jpeg;base64,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) center / cover'}}></CardTitle>
                    <CardText>
                        Console App that takes a json object file and can give the frequency of occurences (number of times that value shows up) 
                        of the values for the same property. I am using Pizza toppings for a real world example in this instance.
                    </CardText>
                    <CardActions border>
                    <Button colored><a href="https://github.com/bampowbam/TopPizzaCombinations" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            </div>
            )
        }
        /*Python*/
        else if(this.state.activeTab ===2){
            return (
                <div className="projects-grid">    
                {/*Flash*/}    
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://res.cloudinary.com/bampow/image/upload/v1576024437/Flash_Screenshot.png) center / cover'}}></CardTitle>
                    <CardText>
                        The web app and mobile app for this concept is a work in progress. I am building a machine learning virtual assistant that will help you study. The brief live demo is a small snippet of the actual application. I am building this concept with ReactJS and React Native on the frontend,
                        Django Python Rest API, and MySql database. 
                    </CardText>
                    <CardActions border>
                    {/* eslint-disable-next-line */}
                        <Button colored><a href="https://letsflash.co/" target="_blank">LiveDemo</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://res.cloudinary.com/bampow/image/upload/v1577591790/Dealership-Feedback.png) center / cover'}}></CardTitle>
                    <CardText>
                        Simple CRUD web app project built with HTML, Python-Flask, PostgresSQL, Heroku. This was just something I put together when reading Flask documentation and hosted it on Heroku for viewing purposes. 
                    </CardText>
                    <CardActions border>
                    {/* eslint-disable-next-line */}
                        <Button colored><a href="https://github.com/bampowbam/DealershipFeedback" target="_blank">Github</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>    
            </div>
            )
        }
        /*React*/
        else if(this.state.activeTab ===3){
            return (
                <div className="projects-grid">
                {/*BearNakedBrew*/}    
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://res.cloudinary.com/bampow/image/upload/v1576021489/BearNakedBrew.png) center / cover'}}>Bear Naked Brew</CardTitle>
                    <CardText>
                        My Amazon business that specializes in top quality coffee appliances. During Quarter 4, revenue is more than $10,000 monthly.I built the website with ReactJS front-end, Wordpress Rest API, and MySql on the backend. It is securely hosted on GoDaddy servers.
                        This website has seen over 10,000 visitors in its duration (a little bit over 6 months).  One of the blogs was shared over 1000 times as well. This journey has been helpful in understanding digital marketing and building a solid UI/UX for customers.
                    </CardText>
                    <CardActions border>
                    {/* eslint-disable-next-line */}
                        <Button colored><a href="https://www.amazon.com/Bear-Naked-Brew-Multi-Screen-Filtration/dp/B07J3VSXFP/ref=cm_cr_arp_d_product_top?ie=UTF8" target="_blank">Website</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                {/*Flash*/}    
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://res.cloudinary.com/bampow/image/upload/v1576024437/Flash_Screenshot.png) center / cover'}}></CardTitle>
                    <CardText>
                        The web app and mobile app for this concept is a work in progress. I am building a machine learning virtual assistant that will help you study. The brief live demo is a small snippet of the actual application. I am building this concept with ReactJS and React Native on the frontend,
                        Django Python Rest API, and MySql database. 
                    </CardText>
                    <CardActions border>
                    {/* eslint-disable-next-line */}
                        <Button colored><a href="https://letsflash.co/" target="_blank">LiveDemo</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                {/*React Portfolio*/}    
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://res.cloudinary.com/bampow/image/upload/v1576026416/Live_Portfolio_Image.png) center / cover'}}></CardTitle>
                    <CardText>
                        Portfolio Page that was built with ReactJS. This uses React-MDL library for styling and React Router Dom for navigation. The code has been deployed to Github Pages.
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/bampowbam/React-Portfolio" rel="noopener noreferrer" target="_blank">Github</a></Button>
                        <Button colored><a href="https://bampowbam.github.io/React-Portfolio" rel="noopener noreferrer" target="_blank">Website</a></Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Angular</Tab>
                    <Tab>.NET</Tab>
                    <Tab>Python</Tab>
                    <Tab>React</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Project;