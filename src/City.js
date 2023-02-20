import './City.css'
import map from './assets/map.png'


import {Link } from "react-router-dom";

function City(){
 
    return(
        <div>
            <div className='city'>
                <p>  خدمات ما در شهر های مختلف</p>
            </div>
            <div className='cityflex'>
                <div className='margiinn'>
                <div className='flexcity'>
    <div className='border1'>
        <Link to="esf"><p className='citytext'>اصفهان</p></Link></div>
    <div className='border2'><p className='citytext'>یزد</p></div>
    <div className='border3'><p className='citytext'>مشهد</p></div>
    <div className='border4'><p className='citytext'>بندر عباس</p></div>
    <div className='border5'><p className='citytext'> تهران</p></div>
</div>
<div className='flexcity margiin'>
<div className='border1'><p className='citytext'>تبریز</p></div>
    <div className='border3'><p className='citytext'>رشت</p></div>
    <div className='border2'><p className='citytext'>قشم</p></div>
    <div className='border5'><p className='citytext'> کرمان</p></div>
    <div className='border3'><p className='citytext'> کرمانشاه</p></div>
</div>
<div className='flexcity margiin'>
<div className='border1'><p className='citytext'> بندر ماهشهر</p></div>
<div className='border2'><p className='citytext'>قم</p></div>
    <div className='border3'><p className='citytext'>سنندج</p></div>
    <div className='border3'><p className='citytext'>خرم آباد</p></div>
    <div className='border5'><p className='citytext'> اراک</p></div>
    
 
</div>



                </div>




<div>
<img className='map' src={map}/>
</div>
            </div>


        </div>
    )
}
export default City;