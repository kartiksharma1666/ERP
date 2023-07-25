import React from 'react'
import { useEffect } from 'react'

export default function Bill(props) {
    let total = 0
    Object.values(sessionStorage).map((k) => {
        k = JSON.parse(k)
        total += k.price * k.quantity
        return total
    })

    const handleClearCart = (e) => {
        sessionStorage.clear();
    }


    useEffect(()=>{
        console.log(props.render)
    } , [props.render])

    return (
        <div>
            <table className='table table-bordered border-primary' style={{ "height": 300, 'width': 1600, 'fontFamily': 'sans-serif', 'padding': 200 }}>

                {
                    Object.values(sessionStorage).map((k) => {
                        console.log(typeof (k))
                        k = JSON.parse(k)
                        return (
                            <tr className="table-light">
                                <td>{k.name}(Size. {k.size})  x  {k.quantity}</td>
                                <td> ₹  {k.price * k.quantity} </td>
                            </tr>
                        )


                    })
                }
                <tr className="table-light">
                    <td>Total </td>
                    <td> ₹ {total}</td>
                </tr>
                <tr className="table-light">
                    <td>12% GST </td>
                    <td>₹ {parseFloat(total * 1.12).toFixed(2)}</td>
                </tr>
                <tr className="table-light">
                    <td>Shipping Cost</td>
                    <td>₹ {total > 2000 || total === 0 ? 0 : 100} </td>
                </tr>
                <tr className="table-light">
                    <td>Grand Total</td>
                    <td>₹ {parseFloat(total === 0 ? 0 : total * 1.12 + 100).toFixed(2)}</td>
                </tr>
            </table>
            <a className='btn btn-danger' href='/checkout' onClick={handleClearCart}>Clear Cart</a>
            <a href='/proceed'><button className='btn btn-success mx-5' disabled={total === 0 || localStorage.getItem('token') === null ? true : false}>proceed</button></a>
        </div>
    )
}
