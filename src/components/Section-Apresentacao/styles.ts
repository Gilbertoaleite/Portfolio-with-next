import styled from 'styled-components';

export const Container = styled.div`

.container-inicial {
	display: flex;
	align-items: center;
	width: 80%;
	margin: 2em auto;
	justify-content: space-between;
	max-width: 1400px;
    
    
    .texto-inicial {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
        .texto-inicial > p {
            font-weight: lighter;
            font-size: 2rem;
        }
            .texto-inicial > h1 {
                font-weight: 700;
                font-size: 3rem;
            }
            
            .texto-inicial > h2 {
                font-size: 2rem;
                font-weight: lighter;
        }
        h2 {
	    font-size: 1.5em;
    }


    .whatsapp {
	padding: 0.5em 0.8em;
	margin-top: 1em;
	text-align: center;
	background-color: #04b431;
	width: 200px;
	color: white;
	text-decoration: none;
	border-radius: 5px;
	display: flex;
	justify-content: space-around;
	font-weight: 700;
	align-items: center;
	font-size: 20px;
	transition: 0.2s;
    img {
            width: 25px;
        }

    &:hover {
        /* background-color: #006400; */
        filter: brightness(0.8);
        
        
        }
    }

    .imagem-inicial {
	width: 60%;
    
    .imagem-inicial > img {
        width: 100%;
        }
    }
}
`;