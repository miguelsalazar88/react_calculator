import {createRoot} from "react-dom/client";
import CalculatorPresenter from "./presenters/CalculatorPresenter";
import {observable} from "mobx";

import model from "./CalcModel.js"

const reactiveModel = observable(model);

createRoot(document.getElementById('root'))
    .render(
        <CalculatorPresenter model={reactiveModel}/>
    ); 

window.myModel = reactiveModel;