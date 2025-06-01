import React from 'react'
import DisplayName from './DisplayName'
import InputName from './InputName'

const FatherComponent = () => {


    const [name, setName] = React.useState('')
  return (
    <div>
    {/* <InputName  onNameSubmit={setName}/> */}
    <InputName value= {name} onChange={setName}/>
    <DisplayName  name= {name}/>
    </div>



  )
}

export default FatherComponent