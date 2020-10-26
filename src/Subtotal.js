import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) =>(
                <>
                <p>
                    Subtotal (0 items):
            <strong>0</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>Esta orden contiene un regalo
                </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button>Proceder al Pago</button>
        </div>
    )
}

export default Subtotal
