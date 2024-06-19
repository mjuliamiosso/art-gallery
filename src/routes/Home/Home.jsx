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

const Home = () => {
  return (
    <div className='img-container container'>
        <img className='img-header' src={HeaderImg} alt="header-img" />
        <div className='grid-container'>
          <div className='grid-group1'>
            <img id='item1' src={Link} alt="" />
            <img id='item2' src={LinkBotw} alt="" />
            <img id='item3' src={Zelda} alt="" />
          </div>
          <div className='grid-group2'>
            <img id='item4' src={JK} alt="" />
            <img id='item5' src={Slg} alt="" />
          </div>
          <div className='grid-group3'>
            <img id='item6' src={Tlou} alt="" />
            <img id='item7' src={Faroc} alt="" />
            <img id='item8' src={Tae} alt="" />
          </div> 
          <div className='grid-group4'>
            <img id='item9' src={Sketch1} alt="" />
            <img id='item10' src={Sketch2} alt="" />
            <img id='item11' src={Sketch3} alt="" />
            <img id='item12' src={Sketch4} alt="" />
          </div>
         
        </div>
    </div>
  )
}

export default Home