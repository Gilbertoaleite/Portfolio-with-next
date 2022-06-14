import styled from 'styled-components';
// import sunImg from '../../assets/img/sun-regular.svg'
// import sol  from "../../assets/img/sun-regular.svg";

export const Container = styled.div`
	header{
    height: 70px;
	background: var(--black);
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;

    #menu {
	display: flex;
	gap: 1rem;
	margin: 2em 2em 2em 0;
	transition: 0.2s;
    a {
	text-decoration: none;
	display: block;
	padding: 0.7rem;
    }

    
}

.nav-li {
	color: white;
	text-decoration: none;
	font-size: 1em;
	font-weight: semibold;
	transition: 0.9s;
    
    &:hover {
        border-bottom: solid 1px var(--blue-padrao);
    }

    .text-day {
        color: var(--text-day);
    }
}

.switch {
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
	margin-right: 2em;
    
    input {
    opacity: 0;
        width: 0;
        height: 0;
    }
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: orange;
	-webkit-transition: 0.4s;
	transition: 0.4s;
    
    &:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background: rgb(255, 255, 255);
        box-shadow: 0 0 20px yellow;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        /* background-image: url('assets/moon-regular.svg'); */
		background: var(--background);
    }
}


input:checked + .slider {
	background: var(--blue-light);
	
}

input:checked + .slider:before {
	-webkit-transform: translateX(26px);
	-ms-transform: translateX(26px);
	transform: translateX(26px);
	background: yellow;
	/* sol aqui */

}

.slider.round {
	border-radius: 34px;

	&:before{
		border-radius: 50% ;
		}
	}
}
`