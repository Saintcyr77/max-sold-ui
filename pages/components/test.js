import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Testt = () => {

    const[api,setApi] = useState({});


    
React.useEffect(()=>{
    async function fetchData(){  
  
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
       axios.get("https://seller-dev.api.maxsold.com/territories?",config).then((res)=>{
        setApi(res);
      })
  
  }
  fetchData();
  },[]); 

  return (
    <div>
        {console.log(api.data)}
    {/* {api.data.map((ap)=>(

        <div>
        {ap.data}
        </div>
    )
    )} */}

{api.data.map((ap) => (
  <div key={ap.id}>
    {ap.territoryId}
  </div>
))}

  </div> 
  )
}

export default Testt