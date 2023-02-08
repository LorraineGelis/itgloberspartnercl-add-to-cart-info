import React from 'react'

/* Hooks necesarios e importantes para traer la información de los productos */
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

/* import ProductGroup from './ProductGroup' */
/* import Totalizers from './Totalizers'; */

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
    const container = generateBlockClass(styles.container, blockClass)
    const container__item = generateBlockClass(styles.container__item, blockClass)
    const container__total = generateBlockClass(styles.container__total, blockClass)
    const container__img = generateBlockClass(styles.container__img, blockClass)
    /*    const image = generateBlockClass(style.image, blockClass) */
    const container__item__info = generateBlockClass(styles.container__item_info, blockClass)
    const container__item_info_quantity = generateBlockClass(styles.container__item_info_quantity)


    const productInfo = useProduct()
    const { orderForm: {
        items,
        totalizers
    } } = useOrderForm()

    console.log("Este producto tiene esta info:", productInfo)
    console.log("Esto son mis totales: ", totalizers[0])

    return (
        <div className={container}>  {
            items.map((item: any, index: number) => {
                console.log(item)
                return (
                    <div key={index} className={container__item}>
                        <div className={container__img}>
                            <img src={item.imageUrls.at1x} />
                        </div>
                        <div className={container__item__info}>
                            <p>{item.name}</p>
                            {/*  <p>{item.id}</p> */}
                            <p>$ {item.price / 100}</p>
                            <p><span className={container__item_info_quantity}>Cantidad</span>: {item.quantity}</p>
                        </div>
                    </div>
                )
            })
        }
            <div className={container__total}>
                <p>Tienes {items.length} productos en el carrito </p>
                <p>Total: {totalizers[0]?.value} Por calcular</p>
            </div>
            <ButtonGroup blockClass={blockClass} />
        </div>
    )
}
export default AddToCartInfo
