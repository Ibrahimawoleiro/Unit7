import { useState } from 'react'
import {  Link } from 'react-router-dom'

function LeftOfMain() {
    const [count, setCount] = useState(0)

    return (

        <div className='LeftOfMain'>
            <div className='Navigation'>

                
                    <Link to="/"><h2>Home</h2></Link><br />
                    <Link to="/Createmate"><h2>Create a Crewmate</h2></Link><br />
                    <Link to="/Gallery"><h2>Crewmate Gallery</h2></Link><br />
         


            </div>
        </div>


    )
}

export default LeftOfMain
