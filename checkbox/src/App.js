import React, { useState } from 'react'

const App = () => {
  const [selectAll, setSelectAll]=useState(false);
  const [checkboxes,SetCheckBoxes]=useState([
    {id:1,checked:false},
    {id:2,checked:false},
    {id:3,checked:false},
    {id:4,checked:false}

  ])
  const handleSelectAll=()=>{
    setSelectAll(!selectAll)
    SetCheckBoxes(checkboxes.map(check =>({
      ...check,
      checked:!selectAll

    })))
  }

  const handlecheckbox=(id)=>{
    
      const updateall=checkboxes.map(check=>
        check.id===id ?{...check,checked:!check.checked} : check)
        SetCheckBoxes(updateall)
    
    const allcheck=updateall.every(check=>check.checked)
    setSelectAll(allcheck)
  }
  return (
    <>
      <h1>Check Boxes</h1>
      <label>
        <input checked={selectAll} type='checkbox' onChange={handleSelectAll} />
        selectAll
      </label>
      <br />
      {checkboxes.map(checkbox =>(
        <label key={checkbox.id}>
        <input 
          checked={checkbox.checked}
          type='checkbox'
          onChange={()=>handlecheckbox(checkbox.id)}

        />
        checkbox {checkbox.id}

        </label>
      ))}

    </>
  )
}

export default App