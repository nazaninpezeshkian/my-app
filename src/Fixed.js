import './Fixed.css'
import { useEffect } from 'react'

import on from './assets/on.png'
import loc from './assets/loca.png'
import cd from './assets/cd.png'

let fixedmenu = document.querySelector("#show")
window.addEventListener("scroll",(e) => {
let heightDisplay = window.innerHeight;
let currentSc = document.documentElement.scrollTop;


if(currentSc >= heightDisplay){
    fixedmenu.style.opacity ="1"
}else{
    fixedmenu.style.opacity="0"
}
})

function Fixed(){
    return(
        <>
        <div className='fixflex' id="show">
 
       
            <div><p className='fixedtext aa'>کلاس های حضوری</p></div>
           
     
   
          
            <div><p className='fixedtext'>کلاس های آنلاین</p></div>
         
            <div><p className='fixedtext b'>بسته های آموزشی</p></div>

        </div>
        </>
    )
}
export default Fixed;


