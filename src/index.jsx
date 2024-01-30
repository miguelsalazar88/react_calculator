import {createRoot} from "react-dom/client";
import CalculatorPresenter from "./presenters/CalculatorPresenter";
createRoot(document.getElementById('root'))
    .render(
        <CalculatorPresenter/>
    ); 