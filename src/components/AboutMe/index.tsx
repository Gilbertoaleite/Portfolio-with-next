import { Container } from "./styles";
import vectorImg from "../../assets/img/Vector.svg";
import linkedinBrands from "../../assets/img/linkedin-brands.svg";
import Image from "next/image";


export function AboutMe() {

	return (
		<>
			<Container >
		<section id="sobre-mim" className="sectOff">
				<div className="container-sobre">
					<div id="UserImage" className="imagem-sobre">
					<img
						src='https://github.com/gilbertoaleite.png'
						alt="Foto pessoal"
						/>
						</div>
					<div className="texto-sobre">
						<h2>Sobre mim</h2>
						<p>
							Olá! sou desenvolvedor Front-end e tenho conhecimentos nas ferramentas React, Nextjs, Bootstrap, 
							Sass, Styled components e entre outros, sou apaixonado por tecnologia e
							inovação! sou do estado de São Paulo, e frequentemente participo
							dos bootcamp da Digital Innovation one e de outras escolas como:
						</p>

							<p> 
								Rocketseat, Alura Oracle One e TreinaWeb. Possuo experiências em projetos em
								front-end Nextjs e React</p>
						<p> no momento estou estudando online os cursos de formação em desenvolvimento e
							me aperfeiçoando cada vez mais em Next e React. 
						</p>
						
						<div className="botoes-sobre">
							<a
								rel="noreferrer noopener"
								target="_blank"
								className="botao"
								href="https://www.linkedin.com/in/gilbertoaleite/"
							><Image
									src={ linkedinBrands }
									title="Meu LinkedIn"
								/>Linkedin</a
							>
							<a
								className="botao"
								href="../../assets/resume/CurriculoGilberto.pdf" download
							>
								<Image src={ vectorImg } alt="Icone-de-anexo" />Currículo
							</a>
						</div>
					</div>
				</div>
				</section>
			</Container>
		</>
	)
};