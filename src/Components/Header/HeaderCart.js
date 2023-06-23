import { Fragment } from "react";

const HeaderCart = ()=> {
    return (
        <Fragment>
                <div>
                    <button className="d-flex">
                        <p>Cart</p>
                        <p>0</p>
                    </button>
                </div>
        </Fragment>
    )
}

export default HeaderCart