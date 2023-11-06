import { useEffect, useState } from 'react'
import LeftOfMain from './LeftOfMain'
import RightOfMain from './RightOfMain'
import { BrowserRouter } from 'react-router-dom'
import supabase from '../config/supabaseClient'



function Mainpage() {

  const [fetchError,setFecthError] = useState(null)
  const [table, setTable] = useState(null)

  useEffect(()=>{
    const fetchTable = async ()=>
    {
      const {data, error} = await supabase
        .from("SameAsPassword1@")
        .select()


        if(error){
          setFecthError("Could not fech from table")
          setTable(null)
          console.log(error)
        }
    
        if(data){
          setFecthError(null)
          setTable(data)
        }
          fetchTable()
    }

    
  },[])
  
  console.log(supabase)
  return (
    <BrowserRouter>
    <div className='Mainpage'>
      <LeftOfMain></LeftOfMain>
      <RightOfMain></RightOfMain>
    </div>
    </BrowserRouter>
    
  )
}

export default Mainpage
