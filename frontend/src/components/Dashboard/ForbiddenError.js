import React from 'react';
import './ForbiddenError.css';
import useEventListener from '@use-it/event-listener'

const ESCAPE_KEYS = ['13', 'Enter'];

const ForbiddenError = () => {
    function handler({ key }) {
        if (ESCAPE_KEYS.includes(String(key))) {
          window.location.href = "/admin/index"
        }
      }
    
      useEventListener('keydown', handler);

    return (  
        <>
        <div id="forbidden">
            <div id="content"> 
            <h1 className="headline">403 Error - Forbidden</h1>
            <p>A fatal 403 exception has occurred. The current page request will be terminated.</p>
        
            <ul>
                <li>Press the back button to return to the previous page.</li>
                <li>Send us an e-mail to let us know about this or enter Konami code.</li>
                <li>Press CTRL+ALT+DEL again to restart your computer. You will<br /> 
                    lose any unsaved information in all applications.</li>
            </ul>
        
            <p className="continue" >Press enter to continue <span class="blink">_</span></p><br />
            </div>
            
            <div id="konami">
                <img src="http://static.yeahwh.at/images/unicorn.gif" />
                <h1 className="wordart" title="WROOOM!!!11">WROOOM!!!11</h1>
            </div>
        </div>  
    </>
    );
}

export default ForbiddenError;