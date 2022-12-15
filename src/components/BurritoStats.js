import React from 'react'
import { formatPrice } from '../helperFunctions/formatting'


const BurritoStats = ({cost, calories}) => {
  return (
    <div className="burrito-stats">
        <div className="burrito-stats-calories">{calories} Cal</div>
        <div className="burrito-stats-cost">{formatPrice(cost)}</div>
    </div>
  )
}

export default BurritoStats