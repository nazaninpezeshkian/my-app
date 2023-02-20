import React from "react";
import './Statistics.css'

class Statistics extends React.Component{
    constructor(){
        super();
        this.state={
            students:"71,000+" , time:"680,000+", teacher:'3,751'

        }
    }
    render(props){
        return <div className="sback">
            <div className="sflex">
                <div>
                    <p className="number">{this.state.students}</p>
                    <p className="stitle">دانش آموز برتر</p>
                </div>


                <div>
                    <p className="number">{this.state.time}</p>
                    <p className="stitle">ساعت کلاس خصوصی</p>
                </div>


                <div>
                    <p className="number">{this.state.teacher}</p>
                    <p className="stitle">اساتید برتر ایران</p>
                </div>

            </div>

        </div>
    }
}
export default Statistics;