import React, { Component } from 'react';

export default class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            menuNav: 'closed'
        }
    }

    render(){

        return(
            <div>
                <nav>
                 <a className='navbar-brand js-scroll-trigger' href='#page-top'>Start Bootstrap</a>
                   
                   {/* this menu will be visible on screens  800 and larger */}
                   <div id='lrg-scrn-menu' className='menu'>
                        <ul>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
                        </ul>
                   </div>

                   {/* this menu will be visible on screens  800 and smaller */}
                   <div id='sm-scrn-menu' className='menu'>
                        <button className='dropdown'>
                            Menu &#9776;
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}