import React from 'react'
import HeaderImg from '../../assets/header-img.png'
import Link from '../../assets/link.png'
import LinkBotw from '../../assets/link-botw.png'
import Zelda from '../../assets/zelda.png'
import JK from '../../assets/jk.png'
import Slg from '../../assets/slg.png'
import Tlou from '../../assets/tlou3.png'
import Faroc from '../../assets/faroc.png'
import Tae from '../../assets/tae.png'
import Sketch1 from '../../assets/sketch20.png'
import Sketch2 from '../../assets/sketch4.png'
import Sketch3 from '../../assets/sketch3.png'
import Sketch4 from '../../assets/sketch21.png'
import './index.scss'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Home = () => {
  return (
    <div className='img-container container'>
        <Zoom>
          <img className='img-header' src={HeaderImg} alt="header-img" />
        </Zoom>
        <div className='grid-container'>
          <Zoom>
            <img src={Link} alt="Legend of Zelda - Ocarina of Time" 
            />
          </Zoom>
          <Zoom>
            <img id='item5' src={Slg} alt="" />
          </Zoom>
          <Zoom>
            <img src={LinkBotw} alt="Legend of Zelda - Breath of the Wild"/>
          </Zoom>
          <Zoom>
            <img src={Zelda} alt="Legend of Zelda - Majora's Mask"/>
          </Zoom>
          <Zoom>
            <img id='item4' src={JK} alt="" />
          </Zoom>
          <Zoom>
            <img id='item8' src={Tae} alt="" />
          </Zoom>
          <Zoom>
            <img id='item6' src={Tlou} alt="" />
          </Zoom>
          <Zoom>
            <img id='item7' src={Faroc} alt="" />
          </Zoom>  
          <Zoom>
            <img id='item10' src={Sketch2} alt="" />
          </Zoom>
          <Zoom>
            <img id='item9' src={Sketch1} alt="" />
          </Zoom>
          <Zoom>
            <img id='item12' src={Sketch4} alt="" />
          </Zoom>
          <Zoom>
            <img id='item11' src={Sketch3} alt="" />
          </Zoom>
          
        </div>
    </div>
  )
}

export default Home