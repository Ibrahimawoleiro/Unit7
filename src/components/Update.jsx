import { useEffect, useState } from 'react'
import supabase from '../config/supabaseClient'
import { useParams ,useNavigate} from 'react-router-dom'

function Update() {
    const {id} = useParams()
    const [count, setCount] = useState(0)
    const [Name,setName] = useState("")
    const [Speed,setSpeed] = useState("")
    const [Character,setCharacter] = useState("")
    const [formError,setFormError] = useState(null)
    const Navigate=useNavigate()
    const [image,setImage] = useState("");
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!Name || !Speed ||!Character){
            setFormError("Please fill in the form correctly")
            return 
        }

        const {data, error} = await supabase
            .from("Heroes")
            .update([{Name,Speed,Character}])
            .eq("id",id)
            .select()
            
        if (error){
            console.log(error)
            setFormError("Please Fill in all the fields correctly")
        }

        if (data){
            console.log(data)
            setFormError(null)
            Navigate("/Gallery")
        }

        console.log(Name, Speed, Character)

    }

    const setChar = (e) =>{
        setCharacter(e.target.value)
    }
    
    useEffect(()=>{
        console.log("memememe")
        const fetchTable = async ()=>
        {
          const {data, error} = await supabase
            .from("Heroes")
            .select()
            .eq("id",id)
            .single()
    
            if(error){
              Navigate("/",{replace: true})
            }
        
            if(data){
              setName(data.Name)
              setSpeed(data.Speed)
              setCharacter(data.Character)
              
            }
              
        }
    
        fetchTable()
      },[id,Navigate])



    return (
        <div className='CreatematePage'>
            <h1>Update Avenger</h1>
            <div className='image-box'>
                <img src={`../src/Photos/${Character}.jpeg`} alt="Image of avengers"/>
            </div>
            <form action="" onSubmit={handleSubmit}>
                    <div className='crewmateFeature'>
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" id="name" placeholder="Enter crewmate's name" value={Name} onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    <div className='crewmateFeature'>
                        <label htmlFor="Speed(mph)">Speed (mph): </label><br />
                        <input type="text" id="name" placeholder='Enter speed in mph' value={Speed} onChange={(e)=>setSpeed(e.target.value)}></input>
                    </div>
                    <div className='character'>
                    <h3>Characters: </h3><br />
                        <div>
                        <input type="radio" name="character" id="Hulk" value="Hulk" onClick={setChar} />
                        <label htmlFor="Hulk"> Hulk </label><br />

                        <input type="radio" name="character" id="Spider-man" value="Spider-man" onClick={setChar}/>
                        <label htmlFor="Spider-man"> Spider-man</label><br />

                        <input type="radio" name="character" id="Arrow" value="Arrow" onClick={setChar}/>
                        <label htmlFor="Arrow">Arrow</label><br />

                        <input type="radio" name="character" id="Black Widow" value="Black Widow" onClick={setChar}/>
                        <label htmlFor="Black Widow">The Black Widow</label><br />

                        <input type="radio" name="character" id="Thor" value="Thor" onClick={setChar}/>
                        <label htmlFor="Thor">Thor</label><br />

                        <input type="radio" name="character" id="Captain America" value="Captain America" onClick={setChar}/>
                        <label htmlFor="Captain America">Captain America</label><br />

                        <input type="radio" name="character" id="Black Panther" value="Black Panther" onClick={setChar}/>
                        <label htmlFor="Black Panther">Black Panther</label><br />

                        <input type="radio" name="character" id="Iron Man" value="Iron Man" onClick={setChar}/>
                        <label htmlFor="Iron Man">Iron Man</label>

                        </div>

                    </div><br />
                    <input type="Submit"  defaultValue={"Update Avenger"}/>
                </form>
                {formError && <p className='error'>{formError}</p>}
        </div>
    )
}

export default Update