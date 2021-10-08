import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';



function HomePage(){


    return(
        <div>
            <>
                <div className="homepage">

                    <Link to="#" className="h1">
                        <p>
                            This is homepage
                            
                        </p>
                    </Link>

                    <Link to="#" className="image">
                        
                            <img src={process.env.PUBLIC_URL+"/logo512.png"} width="512"alt="image"></img>
                        
                    </Link>

                    
                </div>

                <div className="homepage">
                    <Link to="#" className="body">
                        <p>
                           This is an introduction to the homepage implementation
                        </p>
                    </Link>

                </div>

               
               

                
            </>          
        </div>
        
    );
}

function sayHello() {
    alert('You clicked me!');
  }
  // Usage
  <button onClick={sayHello}>Default</button>;

export default HomePage;