import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

/* cores */
:root{
    /* modo dark */
--background-containers: rgba(35, 35, 35, 0.4);
--background: #000111;
--text-night:#fffeee;

/* modo claro */

--text-day:#333333;
--background-day:#fff;
--background-containers-day: #ebebeb;
--red: #E62E4D;

--blue: #5429cc;
--blue-padrao: #5882fa;
--blue-light: #6933ff;
--text-title: #363f5f;
--text-body: #969cb3;
--shape: #ffffff;
--green:#33CC95;
}
/* fim cores */

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    
}

html{
    @media (max-width: 1080px){
        font-size: 93.75%;
        color: blue;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
        color:red;
    }
}

body{
    background: var(--background);
	color: #fffeee;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
	Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    overflow-x: hidden;
    }

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

li{
    list-style: none;
}

h1,h2,h3,h4,h5,h6,strong{
   /* font-weight:600; */
    font-weight:500;
}
h2 {
	font-size: 1.5em;
    }

button{
    cursor:pointer;
}
.botao {
	padding: 1em 2em;
	border-radius: 5px;
	text-align: center;
	background-color: #5882fa;
	width: 50%;
	color: white;
	text-decoration: none;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: space-around;
	transition: 0.3s;
}
.botao > img {
	align-items: center;
	width: 1.5em;
	margin: 0 auto;
}

.botao:hover {
	/* background-color: #5dad; */
	filter: brightness(0.8);
}

.sectOff {
	
	background: var(--background-containers);
	transition: 0.5s;
	width: 100%;
	margin: 0 auto;
}

.sectOff.background-day-gray {
	background-color: var(--background-containers-day);
	color: var(--text-day);
}

.flex-experiencia.background-day-gray {
	background-color: var(--background-containers-day);
	text-decoration: none;
}


`;