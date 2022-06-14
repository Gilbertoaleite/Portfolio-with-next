// import { ThemeProvider } from 'styled-components'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SectionApresentacao } from '../components/Section-Apresentacao'
import { GlobalStyle } from '../styles/global'


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
        <Header/>
        <SectionApresentacao/>
        <Component {...pageProps} />
        <Footer/>
        </>
    
  )
}
