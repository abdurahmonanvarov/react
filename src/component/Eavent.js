import React from 'react'
import { Fragment } from 'react'

function Eavent({event, deletButton}) {
  return (
    <div>
        {event.length === 0 && <h1>Malumotlar yoq</h1>}
        {event.map((event) => {
          return (
            <Fragment key={event.id}>
              <h1>{event.title}</h1>
              <button onClick={() => deletButton(event.id)}>Delet element</button>
            </Fragment>
          )
        })}</div>
  )
}

export default Eavent