import React from 'react'

class Header extends React.Component{
    constructor(props){
        super()
        this.state = {
            text : '',
            isRead : false
        }
        
        
    }
    handleAnim(){
        document.querySelector('.nav-links').classList.toggle('open')

    }
    render(){
        return(
           <nav>
                <h1 className="logo-header">SABC NEWS 🦎👨‍🏫👨‍🏫</h1>
                <div className="humburger" onClick={this.handleAnim.bind(this)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className="nav-links" >
                    <li><a className="contyent" href="#">Africa</a> </li>
                    <li><a className="content" href="#">South Africa</a> </li>
                    <li><a className="content" href="#">Business</a> </li>
                    <li><a className="content" href="#">Politics</a> </li>
                    <li><a className="content" href="#">Sci-tech</a> </li>
                </ul>
                   
           </nav> 
        )
    }
}

export default Header;