import './Head.css'
import { Outlet, Link } from "react-router-dom";
import logo from ".././assets/logo.jpg"
import profile from ".././assets/blue.png"
import profile2 from ".././assets/w.png"
import call from ".././assets/icons8-callback-30.png"
import menu from ".././assets/icons8-menu-48.png"
import Search from ".././assets/search.png"
import Home from './Home';

function Head() {
    return(
    <div>
        <div className='flex'>
            <div className='flex'>
                <br/>
            <div>
                <img className='logo' src={logo}/>
            </div>
            <div className='flex flexright'>
            <div>
                <Link to="/" className='textnone' > <p  className='bold'>صفحه ی اصلی</p> </Link>

            </div>
            <div>
                <Link to="PackagePage"  className='textnone' > <p  className='bold'>بسته ی معلم خصوصی</p></Link>
            </div>
            <div>
              <Link to="Mag"  className='textnone' ><p  className='bold'>مجله استاد بانک</p></Link>
            </div>
            </div>
            </div>
            <div className='flex flexres'>
                
            <div className='flex forrespons2'>
                <div className='btn1 flex'>
                    <div>
                        <img className='pro' src={profile2}/>
                    </div>
                    <div>
                        <Link to="sign" className='textdecoration'>       <p className='whitebold'>ورود / ثبت نام</p></Link>
                 
                    </div>
                    
                </div>


                <div className='btn2 flex to'>
                    <div>
                        <img className='pro' src={profile}/>
                    </div>
                    <div>
                        <p className='whitebold2'> عضویت اساتید</p>
                    </div>
                    
                </div>
            </div>
            <div className='flex'>
                <div>
                    <img src={call} className='call'/>
                </div>
                <div>
                    <p className='bold left'>پشتیبانی:875 145 021</p>
                </div>
            </div>
            

            </div>
        

        </div>
        {/* end */}
        <div className='flex forrespons'>
                <div className='btn flex'>
                    <div>
                        <img className='pro' src={profile2}/>
                    </div>
                    <div>
                        <p className='whitebold'>ورود / ثبت نام</p>
                    </div>
                    
                </div>


                <div className='btn2 flex to'>
                    <div>
                        <img className='pro' src={profile}/>
                    </div>
                    <div>
                        <p className='whitebold2'> عضویت اساتید</p>
                    </div>
                    
                </div>
            </div>
        <div className='flex'>
            <div className='flex hei menuright2'>
                {/* <div>
                    <img className='menupic' src={menu}/>
                </div>
                <div>
                    <p className='menubold'>همه ی دروس</p>
                </div>
                <div className='space'>

                </div> */}
                <div >
                    <p className='text'>ریاضی</p>
                    
                </div>
                <div>
                    <p className='text'>فیزیک</p>
                    
                </div>
                <div>
                    <p className='text'>شیمی</p>
                    
                </div>
                <div>
                    <p className='text'>زیست</p>
                    
                </div>
                <div>
                    <p className='text'>عربی</p>
                    
                </div>
                <div>
                    <p className='text'>فارسی</p>
                    
                </div>
                <div>
                    <p className='text'>انگلیسی</p>
                    
                </div>
                <div>
                    <p className='text'>تاریخ</p>
                    
                </div>
                <div>
                    <p className='text'>جغرافیا</p>
                    
                </div>
                <div>
                    <p className='text'>طراحی</p>
                    
                </div>
                <div>
                    <p className='text'>موسیقی</p>
                    
                </div>

            </div>
            <div className='search flex searchleft'>
                <div>
                    <input className='searchtext' placeholder='جستجو درس یا استاد'/>
                </div>
                <div>
                    <img src={Search} className='searchpic'/>
                </div>
               

            </div>
        

        </div>
        <Outlet />
    </div>
     
    )
    
}
export default Head;