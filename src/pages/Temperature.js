import React from 'react';
import { Link } from 'react-router-dom';
import './temperature.css';

function TemperaturePage(){


    return(
        <div>
            <>
                <div className="temperature">

                    <Link to="#" className="temp">
                        <p>
                            This is temperature page
                        </p>
                    </Link>

                </div>

            </>
            
        </div>
    );
}

export default TemperaturePage;