import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

function ExtensionCard(){

    const [isEnabled, setIsEnabled] = useState(false);

    const handleToggle = (event) => {
      setIsEnabled(event.target.checked);
    };

    return(
        <div className="ExtensionCard-container">
            
{/* 
Icon    		heading
  	    		Description

Button remove.      toggle on and off */}

       <img src="" alt="" />
       <h2  className="Extension-heading">My heading</h2>
       <p className="Extension-desciption"></p>
       <button>Remove</button>
        <FormControlLabel
            control={<Switch checked={isEnabled} onChange={handleToggle} name="toggleSwitch" />}
            label={isEnabled ? 'On' : 'Off'}
        />

        </div>
    )
}
export default ExtensionCard;