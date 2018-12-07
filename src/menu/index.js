import React from 'react'
import '../styles/menu.scss'

const Menu = ({openView, views}) => {
  return (
    <div>
      <h3>Navigation menu</h3>
      <ul>
        {Object.keys(views).map((menuItem, index) => <li key={menuItem} onClick={() => openView(views[menuItem])}>{views[menuItem]}</li>)}
      </ul>
    </div>
  )
}

export {Menu}

