

import Footer from "../../Footer";
import Question from "../../Question";
import ChoosePackage from "./ChoosePackage";
import NewPackage from "./NewPackage";
import PopPackage from "./PopPackage";

function PackagePage(){
    return(
        <>
 <ChoosePackage />
 <br />
<NewPackage />
<PopPackage />
<Question />
<Footer />
        </>
    )
}
export default PackagePage;