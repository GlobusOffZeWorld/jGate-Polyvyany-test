import Image from 'next/image'
import styles from './page.module.scss'
import { useRouter } from 'next/router'
import ProductCard from '@/components/ProductCard'

export default function Home() {

    const price = 100
    const productName = 'Zebronics head phone'
    const info = 'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.'


    return (
        <main className={styles.main}>
            <ProductCard price={price} productTitle={productName} productInfo={info}/>
        </main>
    )
}
