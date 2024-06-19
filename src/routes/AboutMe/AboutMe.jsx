import React from 'react'
import './index.scss'
import AboutImg from '../../assets/eu.png'

const AboutMe = () => {
  return (
    <div className='aboutme container'>
      <img src={AboutImg} alt="" />
      <div className='aboutme-container'>
        <h3>Sobre mim</h3>
        <p>Olá, sou Maria Júlia Miosso, e sou apaixonada por arte e tecnologia. Criei este site como uma plataforma para compartilhar minhas criações artísticas e, ao mesmo tempo, aprimorar minhas habilidades de desenvolvimento web.</p>
        <p>mjuliamiosso@gmail.com</p>
      </div>
    </div>
  )
}

export default AboutMe