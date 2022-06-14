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

h1, h2, h2,h3,h4,h5,h6,strong{
   /* font-weight:600; */
    font-weight:500;
}

button{
    cursor:pointer;
}

[disabled]{
    opacity: 0.6;
    cursor:not-allowed;
}


`;