import './Title.css'
import ax from './assets/22.jpg'

function Place(props){
    return(
        <div className='tflex'>
            
                <div className='margin'>
                <p className='line'>{props.line1}</p>
                </div>
               
          
                <div>
                <img className='titlepic' src={ax}/>
            </div>
           
         
    
        </div>
    )
}

function Title(params){
    const print = [
        {
            title1 :"معلم خصوصی آنلاین یا حضوری را از سامانه ما انتخاب کنید"
        },
        
    ]
    return(
        <div className='back'>
            {print.map ((item) => <Place key={item.id} line1={item.title1}/>)}

        </div> 
        )}

export default Title;