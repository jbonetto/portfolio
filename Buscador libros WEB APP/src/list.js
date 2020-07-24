import React from 'react';
import Item from './item';

function List(props) {
    return(
        <div>
            {
                props.item.map(item =>
                    <Item 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating} />
                )
            }
        </div>
    );
}

export default List;