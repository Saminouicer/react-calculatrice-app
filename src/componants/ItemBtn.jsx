import React from 'react'

const ItemBtn = ({item,action}) => {

  const handleAction=()=> {
    action({
      type:isNaN(parseInt(item))===true?item:'number',
      payload:item
    })

  }

  return (

        <button onClick={()=>{handleAction()}} className='btn'>{item}</button>

  )
}

export default ItemBtn