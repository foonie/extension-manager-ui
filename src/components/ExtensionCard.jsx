import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import './ExtensionCard.css';


/* "logo": "./assets/images/logo-devlens.svg",
"name": "DevLens",
"description": "Quickly inspect page layouts and visualize element boundaries.",
"isActive": true */
function ExtensionCard({logo,name,description,isActive}){

    //const [isEnabled, setIsEnabled] = useState(false);

    const handleToggle = (event) => {
      //setIsEnabled(event.target.checked);
    };

    return(
        <>
        <div className="ExtensionCard-container">
            <div className='cards-top-section'>
                <img src={logo} alt="" />
                <div className='card-text'>
                    <h2 className="Extension-heading">{name}</h2>
                    <p >{description}</p>
                </div>  
            </div>
            <div className='cards-actions'>
                <button className='remove-button'>Remove</button>
                    <FormControlLabel className='toggle-button'
                        control={<Switch checked={isActive} onChange={handleToggle} name="toggleSwitch" />}
                        label={isActive ? 'On' : 'Off'}
                    />
            </div>
        </div>
        </>

    )
}
export default ExtensionCard;