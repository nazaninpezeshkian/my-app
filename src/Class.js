import './Class.css'
import lang from'./assets/lang.svg'
import elm from'./assets/elementary.svg'
import one from'./assets/high.svg'
import two from'./assets/first-high.svg'
import art from'./assets/konkor.svg'
import uni from'./assets/university.svg'
import { Link } from "react-router-dom";

function Class(){
    return(
        <>
        <div className='cflex margintop'>
<div className='cbox flexc'>
<div className='flexc'>
    <div>
<img src={elm} className='icons'/>
    </div>
    <div>
        <p className='cbold'>
 دوره ابتدایی
        </p>
        <p className='ctext'>
ریاضی،علوم،فارسی،...
        </p>
    </div>
</div>
<div>
<p className='ctextt'>
140مدرس
        </p>
</div>
</div>
{/* 1 */}
<div className='cbox'>
<div className='cbox flexc'>
<div className='flexc'>
<Link to="english">      <div>
<img src={lang} className='icons'/>

    </div> </Link>

    <div>
        <p className='cbold'>
زبان انگلیسی
        </p>

        <p className='ctext'>
مکالمه،آیلتس،تافل،...
        </p>
    </div>
</div>
<div>
<p className='ctextt'>
140مدرس
        </p>
</div>
</div>
</div>
        </div>
        {/* 2 */}

        <div className='cflex margintop'>
<div className='cbox flexc'>
<div className='flexc'>
    <div>
<img src={two} className='icons'/>
    </div>
    <div>
        <p className='cbold'>
 متوسطه دوره دوم
        </p>
        <p className='ctext'>
ریاضی،فزیک،شیمی،...
        </p>
    </div>
</div>
<div>
<p className='ctextt'>
140مدرس
        </p>
</div>
</div>
{/* 1 */}
<div className='cbox'>
<div className='cbox flexc'>
<div className='flexc'>
    <div>
<img src={one} className='icons'/>
    </div>
    <div>
        <p className='cbold'>
متوسطه دوره اول
        </p>
        <p className='ctext'>
ریاضی،فیزیک،شیمی،...

        </p>
    </div>
</div>
<div>
<p className='ctextt'>
140مدرس
        </p>
</div>
</div>
</div>
        </div>
        {/* 2 */}


        <div className='cflex margintop'>
<div className='cbox flexc'>
<div className='flexc'>
    <div>
<img src={art} className='icons'/>
    </div>
    <div>
        <p className='cbold'>
 کنکور
        </p>
        <p className='ctext'>
ریاضی،تجربی،ادبیات،...
        </p>
    </div>
</div>
<div>
<p className='ctextt'>
140مدرس
        </p>
</div>
</div>
{/* 1 */}
<div className='cbox'>
<div className='cbox flexc'>
<div className='flexc'>
    <div>
<img src={uni} className='icons'/>
    </div>
    <div>
        <p className='cbold'>
هنرستان
        </p>
        <p className='ctext'>
طراحی،موسیقی،تاریخ هنر،...
        </p>
    </div>
</div>
<div>
<p className='ctextt'>
140مدرس
        </p>
</div>
</div>
</div>
        </div>
        {/* 2 */}
        </>
    )
}
export default Class;