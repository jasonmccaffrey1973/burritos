import React, {useState} from 'react'
import { formatPrice } from '../helperFunctions/formatting'
import getSectionItems from '../helperFunctions/getSectionItems'

const Item = ({data, selected, addItem, removeItem}) => 
{
    return (
        <li className="item" data-selected={selected} onClick={(e)=>{
            (e.target.dataset.selected === 'false') ? addItem(data) : removeItem(data)
        }}>
            <div className="item-image">
                <img src={data.image} alt={data.label} />
            </div>
            <div className="item-info">
                <div className="item-label">{data.label}</div>
                <div className="item-calories">{data.calories} Cal</div>
                { data.cost !== 0 ? <div className="item-cost">{formatPrice(data.cost)}</div> : ''}
            </div>
        </li>
    )
}

const Section = ({title, type, selectedItems, setSelectedItems, limit = 0}) => 
{
    const numberToWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten' ]
    const items = [...getSectionItems(type)]
    
    const [sectionItemsCount, setSectionItemsCount] = useState(0)

    const addItem = (newItem) => 
    {
        if (limit !== 0 && sectionItemsCount >= limit) {
            const endingWord = (limit === 1) ? 'item' : 'items'
            alert(`You can only select ${numberToWord[parseInt(limit)].toLowerCase()} ${type} ${endingWord}.`)
            return
        }
        setSelectedItems([...selectedItems, newItem])
        setSectionItemsCount(sectionItemsCount + 1)
    }

    const removeItem = (itemToRemove) =>
    {
        setSelectedItems(selectedItems.filter(item => item.id !== itemToRemove.id))
        setSectionItemsCount(sectionItemsCount - 1)
    }
    
  return (
    <section datatype={type} className="burrito-section">
        <div className="section-header">
            <h2 className="section-title">{title}</h2>
            {limit !== 0 ? <div className="section-subhead">Limit: {numberToWord[parseInt(limit)]}</div> : ''}
        </div>
        <ul>
            {items.map(item=> item !== false ? <Item key={item.id} data={item} selected={selectedItems.includes(item)} addItem={addItem} removeItem={removeItem} /> : '')}
        </ul>
    </section>
  )
}

export default Section