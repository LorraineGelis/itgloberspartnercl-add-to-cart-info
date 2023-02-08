import React from 'react'

/* type Total = {
        id: string
        name: string
        value: number
} */

const Totalizers = (totalizers: any) => {
    const { id, name, value } = totalizers.total;
    console.log("Mis totales son", id, name, value)
    return (
        <div>
            <p>Tenemos x items en tu compra</p>
            <p>Total : x</p>
        </div>)
}
export default Totalizers