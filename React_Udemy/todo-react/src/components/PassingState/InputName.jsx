import React from 'react'

const InputName = ({name,onChange}) => {

// const[name, setName] = React.useState('')




// const handleSubmit = (e) =>{
//     e.preventDefault();
//     if (onNameSubmit){
//         onNameSubmit(name)
//     }
// }

const handleOnchage = (e) =>{
    onChange(e.target.value)
};

  return (
    <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="name-input">Enter your name:</label>
        <input 
        type="text"
        id='name-input'
        value={name}
        // onChange={e => setName(e.target.value)}
           onChange={handleOnchage}
        placeholder='Type your name'
         />
         <button type='submit'>Submit</button>





    </form>
  )
}

export default InputName