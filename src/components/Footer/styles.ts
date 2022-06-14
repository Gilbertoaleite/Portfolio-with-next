import styled from 'styled-components';

export const Container = styled.div`
	footer {
	display: flex;
	align-items: center;
	margin: 1em auto;
	background: var(--background-containers);
	gap: 2em;
	justify-content: center;
	list-style: none;
	align-items: center;
	text-align: center;
	color: #fffeee;
	.social {
		display: inline-block;
		align-items: center;
		margin: 1em auto;
		width: 5%;
		padding: 0.5em 0.5em 0 0.5em;
		
		&:hover {
			background: cornflowerblue;
		}
	}
}
span,
a {
	color: #5882fa;
	text-decoration: none;
}
`;