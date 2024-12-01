import React from 'react';

import classes from './Summary.module.scss';

const summary = () => {
    return (
    	<div className = { classes.Summary }>
    		<div className = { classes.Block }>
                <h1 className = { classes.Name }>About us</h1>
                <div className = { classes.Line } />
                <p className = { classes.Content }>We are dedicated to providing an exceptional beauty experience with a focus on quality, creativity, and customer care. Our team of skilled professionals offers a range of services, from haircuts and color to nails and skincare, all in a relaxing, welcoming environment. We’re passionate about helping you look and feel your best—every visit, every time.</p>
            </div>
            
    		<div className = { classes.Block }>
                <h1 className = { classes.Name }>Open Hours</h1>
                <div className = { classes.Line } />
                <p className = { classes.Content }>
                    <span>Monday: </span>
                    10:00 AM - 6:30 PM
                    <br />                    
                    <span>Tuesday: </span>
                    10:00 AM - 6:30 PM
                    <br />                    
                    <span>Wednesday: </span>
                    10:00 AM - 6:30 PM
                    <br />                    
                    <span>Thursday: </span>
                    10:00 AM - 6:30 PM
                    <br />                    
                    <span>Friday: </span>
                    10:00 AM - 6:30 PM
                    <br />                    
                    <span>Saturday: </span>
                    10:00 AM - 6:30 PM
                    <br />                    
                    <span>Sunday: </span>
                    11:00 AM - 4:00 PM
                    <br />
                </p>
            </div>
            
    		<div className = { classes.Block }>
                <h1 className = { classes.Name }>Contacts</h1>
                <div className = { classes.Line } />
                <p className = { classes.Content }>
                    <span>Address: </span>
                    RK Tower, Ayodhya Chowk,  150Ft Ring Road,<br />Rajkot, 362001
                    <br />
                    <span>Phone: </span>
                    +91 99986 16850
                    <br />
                    <span>Email: </span>
                    beautyatluxx@gmail.com
                    <br />
                </p>
            </div>
    	</div>
    );
}

export default summary;
