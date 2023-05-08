import { useEffect, useState } from 'react'

import Layout from './components/Layout'
import NavBar from './components/NavBar'
import Container from './components/Container'
import Album from './components/Album'

function App() {

  const [music, setMusic] = useState([])

  const getMusic = async () => {
    const result = await fetch('music.json',{headers: {'Content-Type':'application/json', 'Accept':'application/json'}})
    const data = await result.json()
    setMusic(data)
  }

  useEffect(() => {
    getMusic()      
  }, [])

  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          {
            music.map((i) => (              
              <Album key={i.id} name={i.name} year={i.year} cover={i.cover} tracklist={i.tracklist}/>
            ))
          }
        </Container>
      </Layout>
    </>
  )
}

export default App
