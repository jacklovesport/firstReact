import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './Greeting.jsx'
import { FavFood, FavPic } from './favStuff.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <FavPic/>
    <FavFood/>
  </StrictMode>,
)
