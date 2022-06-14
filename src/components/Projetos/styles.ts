import styled from 'styled-components';

export const Container = styled.div`

.container-projetos {
	width: 100%;
	max-width: 1200px;
	margin: 4em auto;
	display: flex;
	text-align: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 2em;

.item-projeto {
	width: 30%;
	padding: 1em 1em;
	background: var(--background-containers);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: 0.5s;
	text-align: justify;
	gap: 2em;
	border: solid 2px transparent;
	transition: 0.8s;

	
	.botao {
	display:flex;
	width: 100%;
	
	}

.item-projeto:hover {
	border: 2px solid #5882fa;
	filter: brightness(0.8);
}

	
.item-projeto > h3 {
	text-align: center;
	font-size: 1.1em;
	font-weight: 700;
	}
}

.item-projeto.background-day-gray {
	background-color: #ebebeb;
	color: #2c2c2c;
	}
}

.projetos > h2 {
margin-top: 3rem;
font-size: 2em;
text-align: center;
font-weight: 700;
}
`;