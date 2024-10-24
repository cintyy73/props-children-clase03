
import './Layout.css'
import Layout from './Layout'

import image_react from "./assets/images.jpg"
import Card from './components/Card'
const container ={
  display:"flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap:15,
}

function App() {

  return (
    <Layout>
      <div style={container}>
        <Card price={55} title="Import desde public" image="vite.svg" promo/>
        <Card price={44} title="desde public" image="carreras_frontend_2021.jpg" /> 
        <Card price={33} title="imagen desde assets" image={image_react} />
       
      </div>
    </Layout>
  )
}

export default App
