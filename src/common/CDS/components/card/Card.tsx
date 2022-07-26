import React from 'react'
import Icon from './icon/Icon'
import ICard from '../../types/ICard'

function Card (props: ICard) {
  const { title, importance, notification, children} = props
  return (
    <div className='card'>
      <header>
        <Icon importance={importance} />
        <h1>
          {title}
        </h1>
        <button>
          Dismiss X
          {/* X icon */}
        </button>
      </header>
      <p>
        {notification}
      </p>
      <p>
        {children}
      </p>
      <footer>
        <button>
          <label>Icon</label>
          Button Label
        </button>
      </footer>
    </div>
  )
} export default Card
