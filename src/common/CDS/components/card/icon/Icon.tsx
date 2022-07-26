import React from 'react'


interface IIcon {
    importance?: string
}

function Icon(props: IIcon) {
    const {importance} = props

    switch(importance) {
        case 'severe': return <span>🛑</span>
        default: return <span></span>
    }
} export default Icon
