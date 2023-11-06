import { useState } from "react"
import { useEffect } from "react"
import supabase from '../config/supabaseClient'
import Button from "./Button"
function Gallery() {
  const [fetchError, setFetchError] = useState(null)
  const [table, setTable] = useState(null)

  useEffect(() => {
    console.log("lionness")
    const fetchTable = async () => {
      const { data, error } = await supabase
        .from("Heroes")
        .select()

      if (error) {
        setFetchError("Could not fech from table")
        setTable(null)
        console.log(error)
      }

      if (data) {
        console.log(data)
        setFetchError(null)
        setTable(data)
      }
      
    }

    fetchTable()
  }, [])

  console.log("lion")
  return (
    <>
      <div className="Gallery_header">
        <h1>Your Crewmate Gallery</h1>
        <div className="grid">
          {fetchError && (<p>{fetchError}</p>)}
          {table &&
            table.map(
              tablee=>(<Button table={tablee} key={tablee.id} keys={tablee.id}></Button>))
            
          }



          {/* <div className="One">
            <Button></Button>
          </div>
          <div className="Two">
            <Button></Button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Gallery
