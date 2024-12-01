import React from 'react';

import classes from './About.module.scss';

import salon from '../../assets/images/salon.jpeg';
import nails from '../../assets/icons/nails.png';
import waxing from '../../assets/icons/waxing.png';
import makeup from '../../assets/icons/makeup.png';
import massage from '../../assets/icons/massage.png';

const about = () => {
    return (
    	<div className = { classes.About }>
            <div className = { classes.Services }>
                <div className = { classes.Service }>
                    <img className = { classes.Icon } src = { nails } alt = 'Manicure & Pedicure' />
                    <h2 className = { classes.Name }>Manicure & Pedicure</h2>
                
                </div>

                <div className = { classes.Service }>
                    <img className = { classes.Icon } src = { waxing } alt = 'Waxing' />
                    <h2 className = { classes.Name }>Waxing</h2>
                    
                </div>

                <div className = { classes.Service }>
                    <img className = { classes.Icon } src = { makeup } alt = 'Make-up' />
                    <h2 className = { classes.Name }>Make-up</h2>
                    
                </div>

                <div className = { classes.Service }>
                    <img className = { classes.Icon } src = { massage } alt = 'Massage & Treatment' />
                    <h2 className = { classes.Name }>Massage & Treatment</h2>
                    
                </div>
            </div>

            <img className = { classes.Image } src = { salon } alt = 'Beauty Salon' />
    	</div>
    );
}

export default about;
