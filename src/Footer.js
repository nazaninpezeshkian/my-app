import './Footer.css'
import logo from './assets/logo.jpg'


function Footer(){
   
    return(
        <div>
<div className='footerback'>
    <div className='fflex'>
        <div>
            <p className='fbold'>
دسترسی سریع
            </p>
            <p className='ftext'>تماس با ما</p>
            <p className='ftext'>درباره ما</p>
            <p className='ftext'>سوالات متداول</p>
            <p className='ftext'>بسته های آموزشی</p>
            <p className='ftext'>شرایط و قوانین</p>
        </div>


        <div>
            <p className='fbold'>
 خدمات ما
            </p>
            <p className='ftext'>  عضویت دانش آموزان</p>
            <p className='ftext'>عضویت اساتید </p>
            <p className='ftext'>سوالات متداول</p>
            <p className='ftext'>بسته کلاس های خصوصی </p>
            <p className='ftext'> معرفی اساتید برتر </p>
            <p className='ftext'> شهر های فعال</p>
        </div>
        <div className='wtext'>
            <img src={logo} className='flogo'/>
            <p className='fexplain'>لورم ایپسوم متن ساختگی با تولید سادگی ن
امفهوم از صنعت چاپ و رافیک است. چاپگرها و متون بلکه روزنامه و م
جله در ستون و سطرآنچنان که لازم است و برایز  با استفاده از طراحان 
گرافیک است. چاپگرها و متون بلکه روزنامه و م
جله در ستون و سطرآنچنان که لازم است و برایز </p>
        </div>
    </div>

</div>

        </div>
    )
}
export default Footer;