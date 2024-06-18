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
        <div className='img-box'>
          <img src={Link} alt="" />
          <img src={LinkBotw} alt="" />
          <img src={Zelda} alt="" />
          <img src={JK} alt="" />
          <img src={Slg} alt="" />
          <img src={Tlou} alt="" />
          <img src={Faroc} alt="" />
          <img src={Tae} alt="" />
          <img src={Sketch1} alt="" />
          <img src={Sketch2} alt="" />
          <img src={Sketch3} alt="" />
          <img src={Sketch4} alt="" />
        </div>
    </div>
  )
}

export default Home