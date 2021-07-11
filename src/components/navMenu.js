import React from 'react'
import {Link} from 'gatsby'
import classNames from 'classnames';
import "./ham-menu.scss";

export default function navMenu({open}) {
    
    const displayMenu = classNames('mobile-nav-wrapper',{
        open:open,
    })
    return (
        <div className={displayMenu}>
            <Link className="menu-link" activeClassName="active" to="/">Home</Link>
            <Link className="menu-link" activeClassName="active" to="/">Media</Link>
            <Link className="menu-link" activeClassName="active" to="/">About</Link>
            <Link className="menu-link" activeClassName="active" to="/">Contact</Link>
        </div>
    )
}
