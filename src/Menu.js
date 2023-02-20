import React from 'react'
import './Menu.css'
 class Menu extends React.Component{
    constructor(){
        super();
        this.state={
inperson :'کلاس های حضوری',
online :"کلاس های آنلاین",
package :"بسته های آموزشی"
        }
    }
    render(){
        
        return <div className='menualign'>
            <div className='mflex'>
            <div className='box '>
                <p className='mtext'> {this.state.inperson}</p>
            </div>
            <div className='box'>
            <p className='mtext'>  {this.state.online}</p>
            </div>
            <div className='box'>
            <p className='mtext'>  {this.state.package} </p>
            </div>
            </div>
         

        </div>
    }
 }
 export default Menu;