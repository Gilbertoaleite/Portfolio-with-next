import { Container } from "./styles";
import vectorImg from "../../assets/img/Vector.svg";
import linkedinBrands from "../../assets/img/linkedin-brands.svg";
import Image from "next/image";


export function Projetos() {
	return (
		<Container >
	<section className="projetos" id="projetos">
				<h2 >Projetos</h2>
				<div className="container-projetos">
					<div className="item-projeto">
						<h3>Resgate</h3>
						<p>
							Joguinho feito durante o bootcamp JavaScript Game Developer da
							Digital Innovation One
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://jogo-helicoptero.vercel.app/"
						>Link do Projeto</a
						>
					</div>
					<div className="item-projeto">
						<h3>O Mentalista Game</h3>
						<p>
							Pagina o mentalista foi desenvolvido na imersão dev Alura, sendo um jogo de escolher números aleatórios.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://codepen.io/gilbertoaleite/full/XWgzdBE"
						>Link do Projeto</a
						>
					</div>
					<div className="item-projeto">
						<h3>Projeto e-diarista | TreinaWeb</h3>
						<p>
							Projeto foi feito um site fictício, de procura de diaristas, e foi
							feito usando o React e para api foi ultilizado o Python com o
							Django.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://e-diaristas-gilbertoaleite.vercel.app"
						>Link do Projeto</a
						>
					</div>
					<div className="item-projeto">
						<h3>Dashboard de Vendas</h3>
						<p>
							Desenvolvido o dashboard de vendas com Spring e React a parte
							FrontEnd, feito na primeira aula da semana Spring React do
							DevSuperior.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilberto-dsvendas.netlify.app"
						>Link do Projeto</a
						>
					</div>
					<div className="item-projeto">
						<h3>Automatizando com Python</h3>
						<p>
							Automatizando com Python, programei para abrir o chrome e acessar
							a pagina da Dio.me Inc. e acessa o bootcamp da Impulso
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://www.linkedin.com/feed/update/urn:li:activity:6859915957129777154"
						>Link do Projeto</a
						>
					</div>
					<div className="item-projeto">
						<h3>NETFLIX-Live</h3>
						<p>
							Foi desenvolvido em html e com o bootstrap o meu primeiro projeto
							da Dio.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite-netflix-clone.netlify.app/index.html"
						>Link do Projeto</a
						>
					</div>
					<div className="item-projeto">
						<h3>TreinaCook - Receitas</h3>
						<p>
							Foi desenvolvido em Next.js e gerado para a pagina estática que
							deixou o site muito mais rápido.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite-receitas-next-js.vercel.app/"
						>Link do Projeto</a
						>
					</div>
					<div className="item-projeto">
						<h3>Site de Controle Financeiro Nikel</h3>
						<p>
							Desenvolvi esse site de controle financeiro assistindo as aulas do
							codaí(Growdev), dar pra criar conta, e logar no site e lançar
							entrada e saida de dinheiro.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite-codai.netlify.app/"
						>Link do Projeto</a
						>
					</div>
					<div className="item-projeto">
						<h3>ig.news</h3>
						<p>Projeto em Nextjs está em desenvolvimento na aula da Rocketseat React Ignite.</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://ig-news-rocketseat.vercel.app/" >
							Link do Projeto</a>
					</div>
				</div>
			</section>

		</Container>
	)
};