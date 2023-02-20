import Title from "../Title";
import City from "../City";
import Menu from "../Menu"
import Class from "../Class";
import Introduce from "../Introduce";
import Package from "../Package";
import Statistics from "../Statistics";
import Hire from "../Hire";
import Question from "../Question";
import Footer from "../Footer";
import Teachers from "../Teachers";
import TestBuy from "./Testbuy/TestBuy";
import Time from "./Testbuy/Time";
function Home(){
    return(
    <>

    <Title />

    <Class />
    <Teachers />
    <Introduce />
    <Package />
    <Statistics />
    <Hire />
    <Question />
    <City />
    <br/>
    <Footer />
    <TestBuy />
    {/* <Time /> */}
    </>)
}
export default Home;