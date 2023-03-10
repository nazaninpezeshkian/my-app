import "./Hire.css";
import profile from './assets/blue.png'
import teacher from './assets/ax.png'

function Hire(param) {
  return (
    <div>
      <div className="hback">
        <div>
          <p className="q">معلم هستید؟</p>
          <p className="a">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <div className='btn2 flex m'>
                    <div>
                        <img className='pro' src={profile}/>
                    </div>
                    <div>
                        <p className='whitebold2'> عضویت اساتید</p>
                    </div>
                    
                </div>
        </div>
        <div className="w">
            <img className="hirepic" src={teacher}/>
        </div>
      </div>
    </div>
  );
}
export default Hire;
