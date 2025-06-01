import React from 'react'
import ProAndStateAddData from './ProAndStateAddData'
import ProandStateDisplayData from './ProandStateDisplayData'

const ProAndStateParent = () => {

    const [data, setData] = React.useState([])
    
    const handleData = (inputData) =>{
        setData(preData => [...preData,inputData])
    }




  return (
    <div>
      <ProAndStateAddData addData ={handleData}/>
      <ProandStateDisplayData data ={data}/>
    </div>
  )
}

export default ProAndStateParent;
