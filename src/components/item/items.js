import React from 'react';

const Items = (props) => {
    const {items, del, handleIncrease, handleDecrease} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <p className='quantity'>
                        <div onClick={() => handleIncrease(item.id)}>
                            +
                        </div>
                        {item.quantity}
                        <div onClick={() => handleDecrease(item.id)}>
                            -
                        </div>
                    </p>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items