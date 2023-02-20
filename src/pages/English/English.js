import "./English.css"
import { useReducer } from "react";
import ReactDOM from "react-dom/client";
import Englishtext from "./Englishtext";
import Englishtext2 from "./Englishtext2";
import Guide from "./Guide";
import IntroduseTecher from "./IntroduseTecher";
import Star from "./Star";
import Question from "../../Question";
import Footer from "../../Footer";
import React, { useEffect } from 'react';


function English(){
    React.useEffect(()=>{
        window.scrollTo(0,0)
    });
   

    return(
        <>
        <div className="back2">
            <div className="englishmargin">
                <br/>
                <br/>
                <br/>
                <br/>
<div dir="rtl" >
    <p className="englishbold">
    لیست برترین اساتید تدریس خصوصی زبان های خارجی - معلم خصوصی خود را انتخاب کنید
    </p>
    <p>تدریس خصوصی آنلاین و در منزل زبان های خارجی - کلاس، معلم، دبیر، مدرس</p>
</div>

{/* fram */}
<div className="englishframe">
    <div className="frameflexenglish">
    <div className="englishpix1">
    <img  className="englishpic" src="https://www.ostadbank.com/image-main/group-design/LANGUAGE.png"/>
</div>
<div>
    <div>
    <p className="englishtext"> انتخاب استاد توسط خودم :</p>
    </div>

    <div className="englishflex">
        <div className="filterflex">
<div>
    <p className="filtertext"> اساتید دارای تخفیف</p>
</div>
<div>
      <input type="checkbox" className="checkbox" />
    </div>
        </div>
<div className="frame1">
<div dir="rtl">
  
<Englishtext />
</div>
</div>

<div className="frame2">
    <div dir="rtl">
    <Englishtext2 />
    </div>

</div>


    </div>
    {/* 2 */}
    <div className="englishflex">
        <div className="filterflex">
<div>
    <p className="filtertext"> اساتید دارای فیلم معرفی</p>
</div>
<div>
      <input type="checkbox" className="checkbox" />
    </div>
        </div>


<div className="frame3">
    <div dir="rtl">
    <select className="select">
  <option value="volvo">انتخاب درس</option>
  <option value="saab">مکالمه زبان انگلیسی</option>
  <option value="mercedes">گرامر زبان</option>
  <option value="audi">آیلتس </option>
  <option value="audi">تافل </option>
  <option value="audi">زبان انگلیسی فشرده </option>
</select>
    </div>

</div>


    </div>
{/* 3 */}
<div className="englishflex">
        <div className="filterflex">

        </div>
<div className="frame5">
<div dir="rtl">
  
<select className="select">
  <option value="volvo"> سطح استاد</option>
  <option value="saab">یک ستاره</option>
  <option value="mercedes"> دو ستاره</option>
  <option value="audi">سه ستاره </option>
  <option value="audi">چهار ستاره </option>
  <option value="audi">پنج ستاره  </option>
</select>
</div>
</div>

<div className="frame4">
    <div dir="rtl" className="frame4flex">
        <div>
            <p className="gender">جنسیت</p>
        </div>
        <div className="genderflax">
        <div>
      <input type="checkbox" className="checkbox" />
    </div>
    <div>
        <p className="gender ">آقا</p>
    </div>

    <div>
      <input type="checkbox" className="checkbox" />
    </div>
    <div>
        <p className="gender">خانم</p>
    </div>

    <div>
      <input type="checkbox" className="checkbox" />
    </div>
    <div>
        <p className="gender">هر دو</p>
    </div>
        </div>
  
    </div>

</div>


    </div>

  
</div>

    </div>
<div className="align">
<button className="offer">پیشنهاد استاد توسط استاد بانک</button>
</div>

{/* 1 */}

</div>
            </div>

        </div>
        
   
    
        <Guide />
        <IntroduseTecher />
        <Star />
        <br/>
        <br/>
        <Question />
        <br/>
        <Footer />
        </>
    )
}
export default English;