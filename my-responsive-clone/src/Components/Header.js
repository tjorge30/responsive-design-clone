import React, { Component } from 'react';

export default class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    render(){

        return(
            <div>
                {/* <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
            <div class="container">
                <
                <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <svg class="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg><!-- <i class="fas fa-bars"></i> Font Awesome fontawesome.com -->
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav> */}
                <nav>
                 <a className='navbar-brand js-scroll-trigger' href='#page-top'>Start Bootstrap</a>
                   
                   {/* this menu will be visible on screens  600 and larger */}
                   <div id='lrg-scrn-menu' className='menu'>
                        <ul>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
                        </ul>
                   </div>

                   {/* this menu will be visible on screens  600 and smaller */}
                   <div>
                        <button id='sm-scrn-menu' className='menu'>
                            Menu
                        </button>
                        <div>
                            <ul>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}