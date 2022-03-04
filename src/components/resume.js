import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://res.cloudinary.com/bampow/image/upload/v1575600655/Portfolio_Image.png"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Luke Balogun</h2>
            <h4 style={{ color: 'grey' }}>Software Engineer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
              --Martin Fowler </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>10 E 26th St. 55404</p>
            <h5>Phone</h5>
            <p>(832)2746841</p>
            <h5>Email</h5>
            <p>lbalogun16@gmail.com</p>
            <h5>Web</h5>
            <p>https://bampowbam.github.io/React-Portfolio/</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Baylor University"
              schoolDescription=""
            />
            <Education
              startYear={2016}
              endYear={2017}
              schoolName="University of Texas Health Science Center School of Medicine"
              schoolDescription=""
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>
            <Experience
              startYear={2021}
              endYear={"Current"}
              jobName="Syndigo"
              jobDescription="Syndigo powers the continual flow of data and content throughout the entire commerce ecosystem."
            />
            <Experience
              startYear={2020}
              endYear={2021}
              jobName="WHCC"
              jobDescription="White House Custom Color is a privately held picture frame manufacturing company. Main purpose was to maintain and build solutions that revolved around the ecommerce platforms for end user customers and manufacturing software for the warehouse."
            />
            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Ameriprise"
              jobDescription="American diversified financial services company. Ameriprise Financial engages in business through its subsidiaries, providing financial planning, products, and services. Fortune 500 company."
            />

            ...Continued on Resume docx
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill=".NET-C#"
              progress={100}
            />
            <Skills
              skill="Angular"
              progress={90}
            />
            <Skills
              skill="React"
              progress={80}
            />
            <Skills
              skill="Python"
              progress={75}
            />
            <Skills
              skill="SQL"
              progress={75}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;