import React from 'react';
import './Cardlist.css';
import Card from '../card/Card.component';


const Cardlist = (props) => {
    return(
        <div className='cardlist'>
            { props.monster.map(m =>
                 <Card key={m.id} monster={m}/>
                 )}
        </div>
    )

}

export default Cardlist;