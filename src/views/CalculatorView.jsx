import "/src/style.css"

function CalculatorView(props){

    return(
    <div className="calculator">
        
        <div className="screen">
            <div className="screen-previous">123,1234 *</div>
            <div className="screen-current">123,234</div>
        </div>
        <button className="double-span">AC</button>
        <button>DEL</button>
        <button>÷</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className="double-span">=</button>

    </div>
    );

}

export default CalculatorView;