
import './App.css';
import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

function App() {
  const [searchTerm, setsearchhTerm] = useState("")
  const[data,setData]  = useState([])

  const debounceSearchTerm = useDebounce(searchTerm, 300)
  useEffect(() => {
    if (debounceSearchTerm) {
      // console.log("search Term",debounceSearchTerm)
      fetchPokemon(debounceSearchTerm)
    } else {
      console.log("something else")
    }
  }, [debounceSearchTerm])

  const fetchPokemon = () => {
    fetch(`https://emoji-api.com/emojis?access_key=521e75dec7fef126ec6be65477d7089e40ad2644`)
    .then((res) => res.json())
    .then((response)=>{
      console.log("Response",response)
      setData(response)
    })
  }
 
  return (
    <div className="App">
      <input placeholder='search emoji' value={searchTerm}
        onChange={(e) => setsearchhTerm(e.target.value)} />
        {data ? (
              <div>
                 {/* <h1>{data}</h1> */}
                 {JSON.stringify(data)}
              </div>
        ): <div>
          <h1>NO Data</h1>
        </div> }
    </div>
  );
}

export default App;
