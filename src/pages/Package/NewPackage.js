


function NewPackage() {

  const AddPackage = (id) =>{
    let pId = localStorage.getItem("packageid")
    if(pId){
let pId = JSON.parse(localStorage.getItem("packageid"))
pId.ids.push(id);
localStorage.setItem("packageid",JSON.stringify(pId));
    }else{
      let testid = {ids:[]}
      testid.ids.push(id)
      localStorage.setItem("packageid",JSON.stringify(testid));
    }

  }
  return (
    <>
      <div>
        <p className="NPtext">   پرفروش ترین بسته ها</p>
      </div>
      <div className="iflex">
        <div className="pbox">
          <div className="med">
            <p className="baste">بسته آموزش جامع فیزیک دوازدهم</p>
            <hr className="hr" />
          </div>
          <div className="flexi">
            <div>
              <img
                className="teachpic"
                src="https://mrtarh.com/uploads/YABX-MUTF/preview-400%C3%97300/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%B9%DA%A9%D8%B3-%D8%A8%D8%A7-%DA%A9%DB%8C%D9%81%DB%8C%D8%AA-%D8%A7%D8%B3%D8%AA%D8%A7%D8%AF-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87.jpg"
              />
            </div>
            <div>
              <p className="ibold">سعید مهدوی</p>
              <p className="itext">استاد تایید شده</p>
              <p className="level">سطح استاد : 4 امتیاز </p>
              <div className="buyflex">
              <div>
                <img
                  className="buy"
                  src="https://img.icons8.com/nolan/512/shopping-cart-loaded.png"
                />
              </div>
              <div>
                <p className="buytext">تعداد خرید:105</p>
              </div>
            </div>
            <p>قیمت هر جلسه 30تومان</p>
            </div>
          </div>
          <div className="med">
        
            
          </div>
          <div >
          <button className="profiles" onClick={()=>AddPackage({name : ["کلاس جبر و احتمالات" , 1235]})}>مشاهده **و خرید جلسات </button>
          </div>
        </div>
        {/* 1 */}
        <div className="pbox">
          <div className="med">
            <p className="baste">بسته آموزش جامع فیزیک دوازدهم</p>
            <hr className="hr" />
          </div>
          <div className="flexi">
            <div>
              <img
                className="teachpic"
                src="https://mrtarh.com/uploads/YABX-MUTF/preview-400%C3%97300/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%B9%DA%A9%D8%B3-%D8%A8%D8%A7-%DA%A9%DB%8C%D9%81%DB%8C%D8%AA-%D8%A7%D8%B3%D8%AA%D8%A7%D8%AF-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87.jpg"
              />
            </div>
            <div>
              <p className="ibold">سعید مهدوی</p>
              <p className="itext">استاد تایید شده</p>
              <p className="level">سطح استاد : 4 امتیاز </p>
              <div className="buyflex">
              <div>
                <img
                  className="buy"
                  src="https://img.icons8.com/nolan/512/shopping-cart-loaded.png"
                />
              </div>
              <div>
                <p className="buytext">تعداد خرید:105</p>
              </div>
            </div>
            <p>قیمت هر جلسه 30تومان</p>
            </div>
          </div>
          <div className="med">
       
          </div>
          <div >
          <button className="profiles">مشاهده و خرید جلسات </button>
          </div>
        </div>
        {/* 2 */}
        <div className="pbox">
          <div className="med">
            <p className="baste">بسته آموزش جامع فیزیک دوازدهم</p>
            <hr className="hr" />
 
          </div>
          <div className="flexi">
            <div>
              <img
                className="teachpic"
                src="https://mrtarh.com/uploads/YABX-MUTF/preview-400%C3%97300/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%B9%DA%A9%D8%B3-%D8%A8%D8%A7-%DA%A9%DB%8C%D9%81%DB%8C%D8%AA-%D8%A7%D8%B3%D8%AA%D8%A7%D8%AF-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87.jpg"
              />
            </div>
            <div>
              <p className="ibold">سعید مهدوی</p>
              <p className="itext">استاد تایید شده</p>
              <p className="level">سطح استاد : 4 امتیاز </p>
              <div className="buyflex">
              <div>
                <img
                  className="buy"
                  src="https://img.icons8.com/nolan/512/shopping-cart-loaded.png"
                />
              </div>
              <div>
                <p className="buytext">تعداد خرید:105</p>
              </div>
            </div>
            <p>قیمت هر جلسه 30تومان</p>
            </div>
          </div>
          <div className="med">

          </div>
          <div>
          <button className="profiles">مشاهده و خرید جلسات </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewPackage;
