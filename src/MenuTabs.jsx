import React from 'react'

const MenuTabs = ({ filterMenu, tabs }) => {
  return (
    <>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
        {
            tabs.map((currentElem, index) => {
                return <button key={index} className="btn btn-warning" onClick={() => filterMenu(currentElem)}>{currentElem}</button>
            })
        }
          {/* <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button> */}
        </div>
      </div>
    </>
  )
}

export default MenuTabs
