import React, {useState} from 'react';
import * as ri_icons from 'react-icons/ri';
import * as ti_icons from 'react-icons/ti';
import {Link} from 'react-router-dom';
import sideBarData from './navbardata';

import './navbar.css';
import {IconContext} from 'react-icons';

function NavBar(){

    const [sideBarDrawer, setComponentsToNavigationBar]=useState(false);

    const displaySideBar = () => setComponentsToNavigationBar(!sideBarDrawer);

    return(
        <>
            <IconContext.Provider value = {{color: '#fff'}}>
                <div className="navbar">
                    
                    <Link to="#" className="menu-bars">
                        
                        <ti_icons.TiThMenuOutline onClick={displaySideBar}/>
                    </Link>
                    
                    <div className="ribbon">
                        <div className="topbar">
                            DIVOR Automations 
                        </div>

                        <div className="right">
                            Info
                        </div>
                                   
                    </div>

                </div>
                

                <nav className={sideBarDrawer ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={displaySideBar}>
                        <li className = "navbar-toggle">
                            <Link to="#" className="menu-bars_back">
                                <ri_icons.RiArrowGoBackFill/>
                            </Link>
                        </li>

                        {sideBarData.map((item, index)=>{
                            return(
                             <li key={index} className={item.cName}>
                                <Link to={item.redirect_path}>
                                    {item.icon}
                                    <span>{item.tab_name}</span>
                                </Link>
                            </li>        
                            )
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar;