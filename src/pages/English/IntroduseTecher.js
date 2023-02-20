import "./IntroduseTecher.css"
import tick from "./tick.png"
function Video(){
    document.getElementById("moarefi").style.display="none"
}
function Text(){
    document.getElementById("moarefi").style.display="block"
}
function IntroduseTecher(){
    return(
        <div className="inrodusemargins">
        <div>
<p className="introdusebold">350 استاد در دسترس هستند</p>
        </div>
        <div className="introduseframe">
            {/* ax */}
            <div className="presend1">
<img className="intropic" src="https://www.ostadbank.com/file/download/8a8076dc-ecb7-4fab-8963-b1dcbc464d28/1674460269-63ce3c6df13c0.jpg"/>
<p className="introtext">برای مشاهده قیمت، نوع تدریس و درس را وارد نمایید:</p>
<button className="introbtn">انتخاب نوع تدریس و درس</button>
            </div>
            {/* exp */}
            <div className="presend">
<p className="teachername">وحید مظفری</p>
<p className="ostadtext">استاد تایید شده</p>
<div className="ostadflex">
    <div className="ostadflex2">
        <div  className="introicon">
            <img className="wh" src="https://img.icons8.com/ultraviolet/256/class.png"/>
        </div>
        <div>
        <p className="ostadtext2">  تدریس آنلاین</p>
        </div>
    </div>
    <div className="ostadflex2">
        <div className="introicon">
            <img className="wh" src="https://img.icons8.com/ultraviolet/256/about-us-male.png"/>
        </div>
        <div>
        <p className="ostadtext2">  تدریس حضوری - تهران</p>
        </div>
    </div>

</div>

<div className="ostadflex2">
        <div  className="introicon2">
            <img className="wh" src="https://img.icons8.com/ios-glyphs/256/conference-call--v1.png"/>
        </div>
        <div>
        <p className="ostadtext2">  450 جلسه موفق به صورت آنلاین و حضوری در سراسر کشور</p>
        </div>
    </div>


    <div className="ostadflex2">
        <div  className="introicon2">
            <img className="wh" src={tick}/>
        </div>
        <div>
        <p className="ostadtext3"> کارشناسی ارشد آموزش زبان انگلیسی از دانشگاه تهران</p>
        </div>
    </div>
    <ul>
        <li className="litext">دارای مدارک معتبر بین المللی TESOL ، آیلتس و TTC</li>
        <li className="litext">بیش از 16 سال سابقه تدریس در آموزشگاه های کانون زبان ، پویش ، درسا ، مجتمع فنی تهران و ...</li>
        <li className="litext">کارشناسی آموزش زبان انگلیسی از دانشگاه تهران</li>
        <li className="litext">دارای مدارک معتبر بین المللی TESOL ، آیلتس و TTC</li>
    </ul>
            </div>
            {/* ostad */}
            <div className="presend ">
            <div className="flexvideo">
            <p className="teachername cruser" onClick={Text}> معرفی استاد</p>
            <p className="teachername cruser" onClick={Video}>  فیلم معرفی استاد</p>
            
            </div>
    <p className="moarefi" id="moarefi">سلام وحید مظفری هستم. سابقه ی بیش از 15 سال تدریس زبان انگلیسی به صورت متمرکز در آموزشگاه های سطح تهران دارم. تجربه ی مفید من از همکاری با بهترین و حرفه ای ترین افراد باعث شد با جدید ترین متد های آموزشی از جمله ESA, inductive teaching , communicative teaching آشنا شوم و آنها را به مرحله ی اجرا در آورم. سابقه ی کار با کتاب هایی همچون Four Corners, speak now, American English File, English Results, Solutions, Family and friends را در کارنامه ی کاری خود دارم در شغل خود به طور مداوم از به روز ترین وبسایت های آموزشی مانند , BBC learning English, busy teacher, teach-this و بسیاری از منابع دیگر برای تدریس استفاده می کنم و اعتقاد زیادی به لزوم استفاده از تکنولوژی روز در امر تدریس دارم. آموزش غیر مستقیم همراه با فعالیت های جذاب و بازی به هدف یادگیری خط مشی کاری من است. زبان آموزانی که تجربه ی یادگیری با من را داشته اند از من به عنوان مدرسی وقت شناس منظم متعهد و صبور در امر آموزش یاد می کنند. تلاش من پیشرفت در حوزه ی کاری خود توسط بالا بردن دانش و مهارت های مرتبط می باشد.</p>
            </div>
         

        </div>
        {/* 2 */}
        <div className="introduseframe">
            {/* ax */}
            <div className="presend1">
<img className="intropic" src="https://www.ostadbank.com/file/download/8a8076dc-ecb7-4fab-8963-b1dcbc464d28/1674460269-63ce3c6df13c0.jpg"/>
<p className="introtext">برای مشاهده قیمت، نوع تدریس و درس را وارد نمایید:</p>
<button className="introbtn">انتخاب نوع تدریس و درس</button>
            </div>
            {/* exp */}
            <div className="presend">
<p className="teachername">وحید مظفری</p>
<p className="ostadtext">استاد تایید شده</p>
<div className="ostadflex">
    <div className="ostadflex2">
        <div  className="introicon">
            <img className="wh" src="https://img.icons8.com/ultraviolet/256/class.png"/>
        </div>
        <div>
        <p className="ostadtext2">  تدریس آنلاین</p>
        </div>
    </div>
    <div className="ostadflex2">
        <div className="introicon">
            <img className="wh" src="https://img.icons8.com/ultraviolet/256/about-us-male.png"/>
        </div>
        <div>
        <p className="ostadtext2">  تدریس حضوری - تهران</p>
        </div>
    </div>

</div>

<div className="ostadflex2">
        <div  className="introicon2">
            <img className="wh" src="https://img.icons8.com/ios-glyphs/256/conference-call--v1.png"/>
        </div>
        <div>
        <p className="ostadtext2">  450 جلسه موفق به صورت آنلاین و حضوری در سراسر کشور</p>
        </div>
    </div>


    <div className="ostadflex2">
        <div  className="introicon2">
            <img className="wh" src={tick}/>
        </div>
        <div>
        <p className="ostadtext3"> کارشناسی ارشد آموزش زبان انگلیسی از دانشگاه تهران</p>
        </div>
    </div>
    <ul>
        <li className="litext">دارای مدارک معتبر بین المللی TESOL ، آیلتس و TTC</li>
        <li className="litext">بیش از 16 سال سابقه تدریس در آموزشگاه های کانون زبان ، پویش ، درسا ، مجتمع فنی تهران و ...</li>
        <li className="litext">کارشناسی آموزش زبان انگلیسی از دانشگاه تهران</li>
        <li className="litext">دارای مدارک معتبر بین المللی TESOL ، آیلتس و TTC</li>
    </ul>
            </div>
            {/* ostad */}
            <div className="presend ">
            <div className="flexvideo">
            <p className="teachername cruser" onClick={Text}> معرفی استاد</p>
            <p className="teachername cruser" onClick={Video}>  فیلم معرفی استاد</p>
            
            </div>
    <p className="moarefi" id="moarefi">سلام وحید مظفری هستم. سابقه ی بیش از 15 سال تدریس زبان انگلیسی به صورت متمرکز در آموزشگاه های سطح تهران دارم. تجربه ی مفید من از همکاری با بهترین و حرفه ای ترین افراد باعث شد با جدید ترین متد های آموزشی از جمله ESA, inductive teaching , communicative teaching آشنا شوم و آنها را به مرحله ی اجرا در آورم. سابقه ی کار با کتاب هایی همچون Four Corners, speak now, American English File, English Results, Solutions, Family and friends را در کارنامه ی کاری خود دارم در شغل خود به طور مداوم از به روز ترین وبسایت های آموزشی مانند , BBC learning English, busy teacher, teach-this و بسیاری از منابع دیگر برای تدریس استفاده می کنم و اعتقاد زیادی به لزوم استفاده از تکنولوژی روز در امر تدریس دارم. آموزش غیر مستقیم همراه با فعالیت های جذاب و بازی به هدف یادگیری خط مشی کاری من است. زبان آموزانی که تجربه ی یادگیری با من را داشته اند از من به عنوان مدرسی وقت شناس منظم متعهد و صبور در امر آموزش یاد می کنند. تلاش من پیشرفت در حوزه ی کاری خود توسط بالا بردن دانش و مهارت های مرتبط می باشد.</p>
            </div>
         

        </div>
        {/* 2 */}
        {/* 3 */}
        <div className="introduseframe">
            {/* ax */}
            <div className="presend1">
<img className="intropic" src="https://www.ostadbank.com/file/download/8a8076dc-ecb7-4fab-8963-b1dcbc464d28/1674460269-63ce3c6df13c0.jpg"/>
<p className="introtext">برای مشاهده قیمت، نوع تدریس و درس را وارد نمایید:</p>
<button className="introbtn">انتخاب نوع تدریس و درس</button>
            </div>
            {/* exp */}
            <div className="presend">
<p className="teachername">وحید مظفری</p>
<p className="ostadtext">استاد تایید شده</p>
<div className="ostadflex">
    <div className="ostadflex2">
        <div  className="introicon">
            <img className="wh" src="https://img.icons8.com/ultraviolet/256/class.png"/>
        </div>
        <div>
        <p className="ostadtext2">  تدریس آنلاین</p>
        </div>
    </div>
    <div className="ostadflex2">
        <div className="introicon">
            <img className="wh" src="https://img.icons8.com/ultraviolet/256/about-us-male.png"/>
        </div>
        <div>
        <p className="ostadtext2">  تدریس حضوری - تهران</p>
        </div>
    </div>

</div>

<div className="ostadflex2">
        <div  className="introicon2">
            <img className="wh" src="https://img.icons8.com/ios-glyphs/256/conference-call--v1.png"/>
        </div>
        <div>
        <p className="ostadtext2">  450 جلسه موفق به صورت آنلاین و حضوری در سراسر کشور</p>
        </div>
    </div>


    <div className="ostadflex2">
        <div  className="introicon2">
            <img className="wh" src={tick}/>
        </div>
        <div>
        <p className="ostadtext3"> کارشناسی ارشد آموزش زبان انگلیسی از دانشگاه تهران</p>
        </div>
    </div>
    <ul>
        <li className="litext">دارای مدارک معتبر بین المللی TESOL ، آیلتس و TTC</li>
        <li className="litext">بیش از 16 سال سابقه تدریس در آموزشگاه های کانون زبان ، پویش ، درسا ، مجتمع فنی تهران و ...</li>
        <li className="litext">کارشناسی آموزش زبان انگلیسی از دانشگاه تهران</li>
        <li className="litext">دارای مدارک معتبر بین المللی TESOL ، آیلتس و TTC</li>
    </ul>
            </div>
            {/* ostad */}
            <div className="presend ">
            <div className="flexvideo">
            <p className="teachername cruser" onClick={Text}> معرفی استاد</p>
            <p className="teachername cruser" onClick={Video}>  فیلم معرفی استاد</p>
            
            </div>
    <p className="moarefi" id="moarefi">سلام وحید مظفری هستم. سابقه ی بیش از 15 سال تدریس زبان انگلیسی به صورت متمرکز در آموزشگاه های سطح تهران دارم. تجربه ی مفید من از همکاری با بهترین و حرفه ای ترین افراد باعث شد با جدید ترین متد های آموزشی از جمله ESA, inductive teaching , communicative teaching آشنا شوم و آنها را به مرحله ی اجرا در آورم. سابقه ی کار با کتاب هایی همچون Four Corners, speak now, American English File, English Results, Solutions, Family and friends را در کارنامه ی کاری خود دارم در شغل خود به طور مداوم از به روز ترین وبسایت های آموزشی مانند , BBC learning English, busy teacher, teach-this و بسیاری از منابع دیگر برای تدریس استفاده می کنم و اعتقاد زیادی به لزوم استفاده از تکنولوژی روز در امر تدریس دارم. آموزش غیر مستقیم همراه با فعالیت های جذاب و بازی به هدف یادگیری خط مشی کاری من است. زبان آموزانی که تجربه ی یادگیری با من را داشته اند از من به عنوان مدرسی وقت شناس منظم متعهد و صبور در امر آموزش یاد می کنند. تلاش من پیشرفت در حوزه ی کاری خود توسط بالا بردن دانش و مهارت های مرتبط می باشد.</p>
            </div>
         

        </div>
        {/* 3 */}
        {/* 4 */}
        <div className="introduseframe">
            {/* ax */}
            <div className="presend1">
<img className="intropic" src="https://www.ostadbank.com/file/download/8a8076dc-ecb7-4fab-8963-b1dcbc464d28/1674460269-63ce3c6df13c0.jpg"/>
<p className="introtext">برای مشاهده قیمت، نوع تدریس و درس را وارد نمایید:</p>
<button className="introbtn">انتخاب نوع تدریس و درس</button>
            </div>
            {/* exp */}
            <div className="presend">
<p className="teachername">وحید مظفری</p>
<p className="ostadtext">استاد تایید شده</p>
<div className="ostadflex">
    <div className="ostadflex2">
        <div  className="introicon">
            <img className="wh" src="https://img.icons8.com/ultraviolet/256/class.png"/>
        </div>
        <div>
        <p className="ostadtext2">  تدریس آنلاین</p>
        </div>
    </div>
    <div className="ostadflex2">
        <div className="introicon">
            <img className="wh" src="https://img.icons8.com/ultraviolet/256/about-us-male.png"/>
        </div>
        <div>
        <p className="ostadtext2">  تدریس حضوری - تهران</p>
        </div>
    </div>

</div>

<div className="ostadflex2">
        <div  className="introicon2">
            <img className="wh" src="https://img.icons8.com/ios-glyphs/256/conference-call--v1.png"/>
        </div>
        <div>
        <p className="ostadtext2">  450 جلسه موفق به صورت آنلاین و حضوری در سراسر کشور</p>
        </div>
    </div>


    <div className="ostadflex2">
        <div  className="introicon2">
            <img className="wh" src={tick}/>
        </div>
        <div>
        <p className="ostadtext3"> کارشناسی ارشد آموزش زبان انگلیسی از دانشگاه تهران</p>
        </div>
    </div>
    <ul>
        <li className="litext">دارای مدارک معتبر بین المللی TESOL ، آیلتس و TTC</li>
        <li className="litext">بیش از 16 سال سابقه تدریس در آموزشگاه های کانون زبان ، پویش ، درسا ، مجتمع فنی تهران و ...</li>
        <li className="litext">کارشناسی آموزش زبان انگلیسی از دانشگاه تهران</li>
        <li className="litext">دارای مدارک معتبر بین المللی TESOL ، آیلتس و TTC</li>
    </ul>
            </div>
            {/* ostad */}
            <div className="presend ">
            <div className="flexvideo">
            <p className="teachername cruser" onClick={Text}> معرفی استاد</p>
            <p className="teachername cruser" onClick={Video}>  فیلم معرفی استاد</p>
            
            </div>
    <p className="moarefi" id="moarefi">سلام وحید مظفری هستم. سابقه ی بیش از 15 سال تدریس زبان انگلیسی به صورت متمرکز در آموزشگاه های سطح تهران دارم. تجربه ی مفید من از همکاری با بهترین و حرفه ای ترین افراد باعث شد با جدید ترین متد های آموزشی از جمله ESA, inductive teaching , communicative teaching آشنا شوم و آنها را به مرحله ی اجرا در آورم. سابقه ی کار با کتاب هایی همچون Four Corners, speak now, American English File, English Results, Solutions, Family and friends را در کارنامه ی کاری خود دارم در شغل خود به طور مداوم از به روز ترین وبسایت های آموزشی مانند , BBC learning English, busy teacher, teach-this و بسیاری از منابع دیگر برای تدریس استفاده می کنم و اعتقاد زیادی به لزوم استفاده از تکنولوژی روز در امر تدریس دارم. آموزش غیر مستقیم همراه با فعالیت های جذاب و بازی به هدف یادگیری خط مشی کاری من است. زبان آموزانی که تجربه ی یادگیری با من را داشته اند از من به عنوان مدرسی وقت شناس منظم متعهد و صبور در امر آموزش یاد می کنند. تلاش من پیشرفت در حوزه ی کاری خود توسط بالا بردن دانش و مهارت های مرتبط می باشد.</p>
            </div>
         

        </div>
        {/* 4 */}
        {/* 5 */}
        {/* 5 */}
        </div>
    )
}
export default IntroduseTecher;