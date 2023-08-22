import React from 'react'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import ColorPicker from './ColorPicker'
import { FC } from 'react'

type ProductCardProps = {
    price: number,
    productTitle: string,
    productInfo: string
}


const ProductCard: FC<ProductCardProps> = ({ price, productTitle, productInfo }) => (
    <div className={styles.card}>
        <Image className={styles['product-image']} src='/img/Headphones.png' width={258} height={258} alt="" />
        <div className={styles.main}>
            <h1 className={styles.price}>${price}</h1>
            <div className={styles['product-description']}>
                <h2 className={styles.title}>{productTitle}</h2>
                <p>{productInfo}</p>
            </div>

            <p className={styles['color-header']}>Choose your color</p>
        </div>
        
        <ColorPicker />

        <div className={styles.buttons}>
            <button className={styles['add-btn']}>Add to cart</button>
            <button className={styles['buy-btn']}>Buy now</button>
        </div>

        <a className={styles['read-link']}>Read reviews</a>
    </div>
)


export default ProductCard