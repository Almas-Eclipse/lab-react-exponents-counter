const Exponent= ({num, exponent}) => {
    return (
        <div className="exponent-counter-container">
            <p className= "exponent-lable"> 
                n^{exponent}
            </p>
            <p className= "exponent-result">
                {num}^{exponent} =
                <span className="total"> {num ** exponent} </span>
            </p>
        </div>
    );
};

export default Exponent;