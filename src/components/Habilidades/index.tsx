import { Container } from "./styles";
import whatsImg from "../../assets/img/whatsapp-brands.svg";
import devImg from "../../assets/img/dev.svg";
// import githubImg from "../../assets/img/github.svg";
import Image from "next/image";


export function Habilidades() {
	return (
	
	<Container>
	<section className="sectOff" id="habilidades">
				<div className="titulo-habilidades">

					<h2>Habilidades</h2>
				</div>	
				<div className="container-habilidades">
					<div className="icones-habilidades">
						<div className="moldura-icone html">
							<img src="assets/icon-html.svg" alt="Icone HTML" />
							<p>HTML</p>
						</div>
						<div className="moldura-icone css">
							<img src="assets/icon-css.svg" alt="Icone CSS" />
							<p>CSS3</p>
						</div>
						<div className="moldura-icone python">
							<img src="assets/icon-python.svg" alt="Icone Python" />
							<p>Python</p>
						</div>
						<div className="moldura-icone javascript">
							<img src="assets/icon-js.svg" alt="Icone JavaScript" />
							<p>JavaScript</p>
						</div>
						<div className="moldura-icone react">
							<img src="assets/icon-react.svg" alt="Icone React" />
							<p>React.js</p>
						</div>
						<div className="moldura-icone next">
							<img src="assets/icon-next-js.svg" alt="Icone Nextjs" />
							<p>Next.js</p>
						</div>
					</div>
				</div>
			</section>
	</Container>

	)
}