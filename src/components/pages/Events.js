import React, {useEffect, useState} from 'react';
import { Row, Column } from '@carbon/react';



// TODO: Figure out passing params in onClick
 const Events = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://localhost:9000/event")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result['events']);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);
    return (
        <Row className='page-content'>
            <h1>
               { items.map(event => (
                <li key = {event.id}>
                    {event.title}
                </li>
                ))
                }</h1>
        </Row>
    );
};

export default Events;