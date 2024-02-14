import Search from "./Search"
import Breed from "./Breed"
import { fetchBreedInfo } from "./Api"
import { useState } from "react"
import Container from './Container'


const App = () => {
  const [breedInfo, setBreedInfo] = useState(null);

  const handleSearch = async (event) => {
    const breed = event.target.value.trim().toLowerCase();
    if (breed) {
      const info = await fetchBreedInfo(breed);
      if (info) {
        setBreedInfo(info);
      } else {
        setBreedInfo(null);
      }
    } else {
      setBreedInfo(null);
    }
  };

  return (
  <div>
    <Container>
          <h1 className="main-title">Woof Wiki</h1>
          <Search handleSearch={handleSearch} />
          {breedInfo && <Breed breedInfo={breedInfo}  />}
    </Container>
     
  </div>
  )
}

export default App
