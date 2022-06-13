import React, { useState } from 'react'
import Menu from './menu.js'
import MenuItems from './MenuItems.jsx'
import MenuTabs from './MenuTabs.jsx'

const allTabs = [...new Set(Menu.map((currentElem) => currentElem.category)), 'all']

console.log(allTabs)

const Hook17 = () => {
  const [items, setItems] = useState(Menu)
  const [tabs, setTabs] = useState(allTabs)

  const filterItems = (category) => {
    if(category === 'all') {
      setItems(Menu)
      return
    }

    const updatedItems = Menu.filter((currentElem) => {
      return currentElem.category === category;
    })
    setItems(updatedItems)
  }
  return (
    <>
      <h1 className="mt-5 text-center mainheading">Order Your favorite dish</h1>
      <hr />
      {/* Menu Tabs */}
      <MenuTabs filterMenu={ filterItems } tabs={ tabs } />

      {/* my Main items section */}
      <MenuItems data={items} />
    </>
  )
}

export default Hook17
