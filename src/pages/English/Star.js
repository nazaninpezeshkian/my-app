import "./Star.css"
let st = false
function Score(){
if (st) {
    document.getElementById("a").src="https://img.icons8.com/color/256/star--v1.png"
    st = false
}else{
    document.getElementById("a").src="https://img.icons8.com/fluency/256/star.png"
    st = true

}
}
let st2 = false
function Score2(){
    if (st2) {
        document.getElementById("b").src="https://img.icons8.com/color/256/star--v1.png"
        st2 = false
    }else{
        document.getElementById("b").src="https://img.icons8.com/fluency/256/star.png"
        st2 = true
    
    }
    }
    let st3 = false
    function Score3(){
        if (st3) {
            document.getElementById("c").src="https://img.icons8.com/color/256/star--v1.png"
            st3 = false
        }else{
            document.getElementById("c").src="https://img.icons8.com/fluency/256/star.png"
            st3 = true
        
        }
        }
        let st4 = false
        function Score4(){
            if (st4) {
                document.getElementById("d").src="https://img.icons8.com/color/256/star--v1.png"
                st4 = false
            }else{
                document.getElementById("d").src="https://img.icons8.com/fluency/256/star.png"
                st4 = true
            
            }
            }
            let st5 = false
            function Score5(){
                if (st5) {
                    document.getElementById("e").src="https://img.icons8.com/color/256/star--v1.png"
                    st5 = false
                }else{
                    document.getElementById("e").src="https://img.icons8.com/fluency/256/star.png"
                    st5 = true
                
                }
                }
function Star(){
    return(
        <>
<div className="starmargins">
<div className="starframe">
    <br/>

<p className="startextbold">به اساتید این صفحه امتیاز دهید</p>
<br/>

<div className="starflex">
    <img id="a" className="starsize" src="https://img.icons8.com/color/256/star--v1.png" onClick={Score}/>
    <img id="b" className="starsize" src="https://img.icons8.com/color/256/star--v1.png" onClick={Score2}/>
    <img id="c" className="starsize" src="https://img.icons8.com/color/256/star--v1.png" onClick={Score3}/>
    <img id="d" className="starsize" src="https://img.icons8.com/color/256/star--v1.png" onClick={Score4}/>
    <img id="e" className="starsize" src="https://img.icons8.com/color/256/star--v1.png" onClick={Score5}/>

</div>
<br/>
<br/>
<p className="startext">امتیاز 3.8 از 5</p>
</div>
    </div>
        </>
    )
}
export default Star;