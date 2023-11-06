import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import supabase from "../config/supabaseClient"
function Button(props) {
  const [count, setCount] = useState(0)

  const handleDelete = async function(){
    const {data,error} = await supabase
      .from("Heroes")
      .delete()
      .eq("id",props.keys)

      if(error){
        console.log(error)
      }
        setCount(1)
      
      if(data){
        console.log(data)
      }
  }

  

  return (
    <div className='Button' id={"person" + props.keys}>


      <div className="buttonDiv">
        <img src={`src/Photos/${props.table.Character}.jpeg`} alt="" />
      </div>
      <div className="properties">
        <p>Name Of Avenger: {props.table.Name}</p>
        <p>Speed Of Avenger: {props.table.Speed}</p>
        <p>Character Of Avenger: {props.table.Character}</p>
        <div className="updator">
          <Link to={"/Update/" + props.keys}><button>Update Avenger</button></Link><br />
          <button onClick={handleDelete}>Delete Avenger</button>
        </div>

      </div>

    </div>
  )
}

export default Button
