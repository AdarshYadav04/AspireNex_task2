import { NavLink } from "react-router-dom"

import { Fragment } from "react"
import Cart from "../Cart"
import Login from "../Login/Login"


const Header=(props)=>{
    const {count}=props
    return (
        <Fragment>
            <header>
                <div className={"nav-brand"}>
                    <a to="/">
                        <span>AdaKart</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30"
                            height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                    </a>
                </div>
                <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"beauty"}>Beauty</NavLink></li>
                    <li><NavLink to={"Men"}>Men</NavLink></li>
                    <li><NavLink to={"Women"}>Women</NavLink></li>
                    <li><NavLink to={"Kids"}>Kids</NavLink></li>
                </ul>
                </nav>
                <div className="search">
                    <input type="search" name="search" placeholder="Search"></input>
                    <button>Search</button>
                </div>
                <div className="cart">
                    <Cart count={count}/>
                </div>
                <div className="login">
                    <Login/>
                </div>
            </header>
        </Fragment>
    )
}

export default Header