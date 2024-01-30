import {observer} from "mobx-react-lite";
import CalculatorView from "../views/CalculatorView";


export default observer(
    function Calculator(props){
        return <CalculatorView/>;
    }
)