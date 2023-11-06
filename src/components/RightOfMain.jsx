import { useState } from 'react'
import Home from './Home'
import CreatematePage from './CreatematePage'
import Gallery from './Gallery'
import { Route, Routes } from 'react-router-dom'
import Update from './Update'
function RightOfMain() {
    const [count, setCount] = useState(0)

    return (

        <div className='RightOfMain'>    
           
           <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Createmate' element={<CreatematePage/>}></Route>
            <Route path='/Gallery' element={<Gallery/>}></Route>
            <Route path='/Update/:id' element={<Update/>}></Route>
           </Routes>
        </div>


    )
}

export default RightOfMain
