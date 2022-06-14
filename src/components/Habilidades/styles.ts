import styled from 'styled-components';

export const Container = styled.div`

.container-habilidades {
	display: flex;
	width: 100%;
	margin: 0 auto;
	max-width: 1400px;
	padding: 6em;
	justify-content: space-between;
}

.titulo-habilidades > h2 {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	text-align: center;
	font-size: 1.5em;
	margin: 0;
}

.icones-habilidades {
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	flex-direction: row;
	margin: 1em auto;
	width: 80%;
}

.moldura-icone {
	background-color: #000000;
	height: 90px;
	width: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: solid 10px #eeeeee;
	box-sizing: border-box;
	transition: 0.2s;
	flex-direction: column;
	position: relative;
	cursor: pointer;
	/* color: transparent; */
	color: #eeeeee;
}

.moldura-icone.background-day {
	background-color: #333333;
	color: #333333;
	border-bottom: solid 10px #5dad;
}

.moldura-icone.show-hab {
	border-bottom: solid 50px #5882fa;
	padding: 2em;
	transition: 0.3s;
}

.moldura-icone.show-hab:hover {
	border-bottom: solid 50px #5882fa;
	filter: brightness(0.8);
}
.moldura-icone > p {
	position: absolute;
	bottom: -35px;
	font-weight: 700;
	font-size: 16px;
	letter-spacing: 1px;
}

.moldura-icone:hover {
	border-bottom: solid 10px #5882fa;
}

.html.show-hab,
.python.show-hab,
.javascript.show-hab,
.react.show-hab,
.next.show-hab,
.css.show-hab {
	color: white;
}

`;