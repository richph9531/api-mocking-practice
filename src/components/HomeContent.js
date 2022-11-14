import axios from 'axios';
import React, {useState, useEffect} from "react"

const HomeContent = () => {
  const [response, setResponse] = useState([]);
   
  useEffect( () => { 
    async function fetchData() {
      const res = await axios.get('http://localhost:3000/homePageContent');
        setResponse(res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {response.title}
      <br/>
      {response.description}
    </div>
  )
}

export default HomeContent;

