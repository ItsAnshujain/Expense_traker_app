import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transactions }) => {
    const { deletetransaction } = useContext(GlobalContext)
    const sign = transactions.amount < 0 ? '-' : '+'
    return (
        <div>
            <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
                {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span><button onClick={()=>deletetransaction(transactions.id)} className='delete-btn'>x</button>
            </li>
        </div>
    )
}

export default Transaction
