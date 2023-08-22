'use client'

import React, { useState } from 'react'
import styles from './ColorPicker.module.scss'

type colorsAvailable = '#EE4444' | '#3C81F6' | '#000000'

const ColorPicker = () => {

    const colors: colorsAvailable[] = ['#EE4444', '#3C81F6', '#000000']
    const [selectedColor, setSelectedColor] = useState<colorsAvailable>(colors[0])

    return (
        <div className={styles['color-wrapper']}>
            {colors.map((color, i) => {
                let style = styles.eclipse
                if (selectedColor === color) {
                    style += ' ' + styles.active
                }
                return (
                    <div
                        key={i}
                        className={style}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                    >
                    </div>
                )
            })}


        </div>
    )
}

export default ColorPicker