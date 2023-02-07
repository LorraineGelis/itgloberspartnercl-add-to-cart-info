import React from 'react'

/* Hooks necesarios para traer la información de los productos */
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup'

/* import ProductGroup from './ProductGroup' */
/* import Totalizers from './Totalizers'; */

const AddToCartInfo = () => {

    const productInfo = useProduct()
    const { orderForm: {
        items,
        totalizers
    } } = useOrderForm()

    console.log("Este producto tiene esta info:", productInfo)
    console.log("Esto son mis totales: ", totalizers[0])

    return (
        <>  {
            items.map((item: any, index: number) => {
                console.log(item)
                return (
                    <div key={index}>
                        <div>
                            <img src={item.imageUrls.at1x} />
                        </div>
                        <div>
                            <p>{item.name}</p>
                            <p>{item.id}</p>
                            <p>${item.price / 100}</p>
                            <p>Cant:{item.quantity}</p>
                        </div>
                    </div>
                )
            })
        }
            <div>
                <p>Tienes {items.length} productos en el carrito </p>
                <p>Total: $ {totalizers[0]?.value}</p>
            </div>
            <ButtonGroup />
        </>
    )
}
export default AddToCartInfo
