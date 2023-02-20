import './Teachers.css'
function Text(props){
    return(
        <div className="align">
            <p className="teach">{props.name}</p>
        </div>
    )
}
function Teachers(param){
    const ourteacher = [
        {
            masters :"اساتید برتر ما"
        },
    ]
    return(
        <div>
            {ourteacher.map ((item) => <Text key={item.id} name={item.masters}/>)}
        </div>
    )
}
export default Teachers;