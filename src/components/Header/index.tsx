import Image from 'next/image';
import { Container } from './styles'
// import sunImg  from "../../assets/img/sun-regular.svg";

export function Header() {
    let dayMode;
    return (
        <>
            <Container>
                <header>
                <nav id="nav-menu">
                    {/*  menu mobile  */ }
                    <button id="btn-mobile" aria-label="Abrir Menu" aria-haspopup="true" aria-controls="#menu" aria-expanded="false"> Menu
                        <span id="hamburguer"></span>
                    </button>
                    {/* menu desktop */ }
                    <ul className='nav-menu' id="menu" role="menu">

                        <li id="lista-menu" ><a href="#sobre-mim"
                            className="nav-li">Sobre Mim</a>
                        </li>
                        <li id="lista-menu1"><a href="#projetos"
                            className="nav-li">Projetos</a>
                        </li>
                        <li id="lista-menu2" ><a href="#habilidades"
                            className="nav-li">Habilidades</a>
                        </li>
                        <li id="lista-menu3"><a href="#experiencias"
                            className="nav-li">Educação e Experiencias</a>
                        </li>
                        {/* <li id="lista-menu4"><a href="/eng.html"
                            className="nav-li">English</a>
                        </li> */}
                    </ul>
                </nav>
                <label className="switch" title="Butão Modo Noturno">
                    <input type="checkbox" onClick={ dayMode } id="toggleSwitch" />
                    <span className="slider round">
                        
                    </span>
                </label>
                </header>
            </Container>
        </>
    )
};
