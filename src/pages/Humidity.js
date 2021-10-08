import React from 'react';
import { Link } from 'react-router-dom';
import './humidity.css';

function HumidityPage(){


    return(
        <div>
            <>
                <div className="humidity">

                    <Link to="#" className="hum">
                        <p>
                            This is humidity page
                        </p>
                    </Link>

                </div>

            </>
            
        </div>
    );
}

export default HumidityPage;