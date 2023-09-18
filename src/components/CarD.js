function CarD(props){
    return(
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">{props.cardTitle}</h4>
                </div>
                <div className="card-body">
                <h1 className="card-title pricing-card-title">${props.cardPrice}</h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{props.cardfeatures1}</li>
                    <li>{props.cardfeatures2}</li>
                    <li>{props.cardfeatures3}</li>
                    <li>{props.cardfeatures4}</li>
                </ul>
                <button type="button" 
                className="w-100 btn btn-lg btn-outline-primary" id={props.id}>Comprar</button>
                </div>
            </div>
        </div>
    )
}
export default CarD;