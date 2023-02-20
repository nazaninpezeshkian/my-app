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

function Esf(){

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
    لیست برترین اساتید تدریس خصوصی اصفهان - معلم خصوصی خود را انتخاب کنید.
    </p>
    <p>تدریس خصوصی آنلاین و در منزل اصفهان - کلاس، معلم، دبیر، مدرس</p>
</div>

{/* fram */}
<div className="englishframe">
    <div className="frameflexenglish">
    <div className="englishpix1">
    <img  className="englishpic" src="https://www.ostadbank.com/image-main/group-design/null.png"/>
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

        <div className="frameesf4">
    <div dir="rtl">
    <select className="select">
  <option value="volvo"> اصفهان</option>
  <option value="saab">تهران</option>
  <option value="mercedes"> رشت</option>
  <option value="audi">  کرمان </option>
  <option value="audi">کرمانشاه </option>
  <option value="audi">کرج</option>
</select>
    </div>

</div>

<div className="frameesf3">
    <div dir="rtl">
    <select className="select">
  <option value="volvo">انتخاب درس</option>
  <option value="saab">ابتدایی</option>
  <option value="mercedes"> متوسطه دوره اول</option>
  <option value="audi">متوسطه دوره دوم </option>
  <option value="audi">دانشگاه </option>
  <option value="audi">زبان انگلیسی </option>
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
export default Esf;