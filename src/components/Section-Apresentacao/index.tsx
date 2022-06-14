import { Container } from "./styles";
import whatsImg from "../../assets/img/whatsapp-brands.svg";
import devImg from "../../assets/img/dev.svg";
// import githubImg from "../../assets/img/github.svg";
import Image from "next/image";


export function SectionApresentacao() {
	return <Container>
		<div id="inicial" className="container-inicial">
			<div className="texto-inicial">
				<p>Olá, meu nome é</p>
				<h1 id="userName">Gilberto de Araujo Leite</h1>
				<p id="userBio">
					Desenvolvedor Front-end JR, React e Next.js.
				</p>
				<a
					rel="noreferrer noopener"
					href="https://api.whatsapp.com/send?phone=+55%2011%2096347-1286&text=Sua%20mensagem"
					className="whatsapp"
				><Image
						src={ whatsImg }
						alt="Icone whatsapp"
					/>Whatsapp</a
				>
			</div>
			<div className="imagem-inicial">
				<Image className="imagem-inicial" src={devImg} alt="imagem de um boneco com notebook" />
			</div>
		</div>
	</Container>
}