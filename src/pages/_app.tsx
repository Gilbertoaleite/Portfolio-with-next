// import { ThemeProvider } from 'styled-components'

import { AboutMe } from '../components/AboutMe'
import { Certificados } from '../components/Certifcados'
import { Experiencias } from '../components/Experiencias'
import { Footer } from '../components/Footer'
import { Habilidades } from '../components/Habilidades'
import { Header } from '../components/Header'
import { Presentation } from '../components/Presentation'
import { Projetos } from '../components/Projetos'
import { GlobalStyle } from '../styles/global'


export default function App({ Component, pageProps }) {
  return (
    <>      <GlobalStyle />
        <Component {...pageProps} />
        <Header/>
        <Presentation/>
        <AboutMe/>
        <Projetos/>
        <Habilidades/>
        <Experiencias/>
        <Certificados/>
        <Footer/>
        </>

    
  )
}
