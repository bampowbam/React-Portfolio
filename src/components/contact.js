import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Luke Balogun</h2>
            <img
              src="https://res.cloudinary.com/bampow/image/upload/v1575600655/Portfolio_Image.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Full Stack Software Developer who has consulted for companies in Houston, Los Angeles, Sacramento, Minneapolis, Oklahoma, and more. I am well versed with OOP Design Patterns, SOLID Principles, Dependency Injection (Poor Man's and Containers), and Refactoring. I have spent time in my past building out full scale applications from the ground up into production that have generated companies positive results through automation, scale, and cloud technology. Not only am I well versed with Software Programming, but I also excel in knowledge for Biochemistry, Biology, Chemistry, Physics, Mathematics, Anatomy, and Physiology. 
             I also am fluent in Spanish and lived in South America for some time.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (832) 274 -6841
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    lbalogun16@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    lbalogun2020@outlook.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;