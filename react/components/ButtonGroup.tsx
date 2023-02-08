import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'

import styles from './styles.css'

const ButtonGroup = ({ blockClass }: { blockClass: string }) => {

    const container__buttons = generateBlockClass(styles.container__buttons, blockClass)
    const button__checkout = generateBlockClass(styles.button__checkout, blockClass)
    const button__cart = generateBlockClass(styles.button__cart, blockClass)
    return (
        <>
            <div className={container__buttons}>
                <a className={button__checkout} href="/">Continúa la compra</a>
                <a className={button__cart} href="https://storecompragamer--itgloberspartnercl.myvtex.com/checkout/#/cart">Ver carrito</a>
            </div>
        </>
    )
}

export default ButtonGroup