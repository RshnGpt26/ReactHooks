import React, { useEffect, useState } from 'react'

// To get data from Local Storage
const getLocalItems = () => {
    let list = localStorage.getItem('List')
    if (list) {
        return JSON.parse(localStorage.getItem('List')) // JSON.parse is used to convert string into array
    } else {
        return []
    }
}

const Hook18 = () => {
    const [inputData, setInputData] = useState('')

    const [items, setItems] = useState(getLocalItems())

    const [toggleSubmit, setToggleSubmit] = useState(true)

    const [isEditItem, setIsEditItem] = useState(null)

    const addItem = () => {
        if(!inputData) {
            alert('Item name must not be empty')
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((currentElem) => {
                    if(currentElem.id === isEditItem) {
                        return { ...currentElem, name: inputData }
                    }
                    return currentElem
                })                
            )
            setToggleSubmit(true)
            setInputData('')
            setIsEditItem(null)
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData])
            setInputData('')
        }
    }

    const deleteItem = (index) => {
        const updatedItem = items.filter((currentData) => {
            return index != currentData.id
        })
        setItems(updatedItem)
    }

    const removeAll = () => {
        setItems([])
    }

    const editItem = (id) => {
        let newEditItem = items.find((currentData) => {
            return currentData.id == id
        })
        console.log(newEditItem)
        setToggleSubmit(false)
        setInputData(newEditItem.name)
        setIsEditItem(id)
    }

    // Add Data to Local Storage
    useEffect(() => {
        localStorage.setItem('List', JSON.stringify(items)) // JSON.stringify is used to convert array into string
    }, [items])

  return (
    <>
      <div className="main-div">
          <div className="child-div">
              <div className="addItems">
                  <input type="text" value={ inputData } onChange={ (e) => setInputData(e.target.value) } placeholder="Add Items..." />
                  {
                      toggleSubmit ? <i className="fas fa-plus add-btn" title='Add Item' onClick={ addItem }></i> : <i className="fas fa-edit add-btn" title='Update Item' onClick={ addItem }></i>
                  }                  
              </div>
              <div className="showItems">
                {
                    items.map((currentData) => {
                        return (
                            <div key={ currentData.id } className="eachItem">
                                <h3>{ currentData.name }</h3>
                                <div className="todo-btn">
                                    <i className="far fa-edit add-btn" title='Edit Item' onClick={() => editItem(currentData.id)}></i>
                                    <i className="far fa-trash-alt add-btn" title='Delete Item' onClick={() => deleteItem(currentData.id)}></i>
                                </div>
                            </div>
                        )
                    })
                }
              </div>
              <div className="showItems">
                  <button className='btn effect04' data-sm-link-text="Remove All" onClick={ removeAll }><span>CHECK LIST</span></button>
              </div>
          </div>
      </div>
    </>
  )
}

export default Hook18
