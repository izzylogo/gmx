import React from 'react'
import '../styles/Navbar.css'
import {AiOutlineSearch, AiOutlineMenu, AiFillQuestionCircle} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav>
        <div className="nav-contain">
            <div className="nav-top">

                <div className="left">
                    <a href="#">
                        <h1>GMX</h1>
                    </a>
                </div>
                <div className="middle">
                    <div className="input-cover">
                        <input type="text" placeholder='Suchen mit GMX'/>
                        <div className="icon">
                            <AiOutlineSearch color='white' fontSize={20} />
                        </div>
                    </div>
                    <div className="help">
                        <AiFillQuestionCircle color='white' fontSize={25}/>
                        <p>Hilfe</p>
                    </div>
                </div>
                <div className="right">
                    <button>Mail-Account anlegen...</button>
                </div>
            </div>
            <div className="nav-bottom">
                <div className="bottom-left">
                    <div className="menu"><AiOutlineMenu/></div>
                    <ul>
                        <li>Email & Cloud</li>
                        <li>Cellular & DSL</li>
                        <li>Electricity gas</li>
                        <li>Shop</li>
                        <li>Lotto</li>
                        <li>Insurance</li>
                    </ul>
                </div>
                <div className="logo">
                    <p>logo</p>
                    <p>logo</p>
                    <p>logo</p>
                </div>
            </div>
            <hr />
            
        </div>
    </nav>
  )
}

export default Navbar