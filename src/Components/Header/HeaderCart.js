import { Fragment } from "react";

const HeaderCart = (props)=> {
    return (
        <Fragment>
                <div>
                    <button className="d-flex" onClick={props.showCart} >
                        <p>Cart</p>
                        <p>0</p>
                    </button>
                </div>
        </Fragment>
    )
}

export default HeaderCart