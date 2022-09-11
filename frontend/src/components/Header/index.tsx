import "./styles.css"
import logo from "../../assets/img/logo.svg"
import MiniButton from "../MiniButton/MiniButton"

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Renda de Vendas</h1>
                <p>Desenvolvido por Stênio</p>
                <div className="dsmeta-buttons">
                    <MiniButton link="https://github.com/stenioEll" icon="fa-brands fa-github fa-lg"></MiniButton>
                    <MiniButton link="https://api.whatsapp.com/send?phone=5584999182370&text=Olá%20tudo%20bem." icon="fa-brands fa-whatsapp fa-lg"></MiniButton>
                    <MiniButton link="mailto:stenio1998@gmail.com" icon="fa-brands fa-envelope fa-lg"></MiniButton>
                </div>
            </div>
        </header>
    )
  }
  
  export default Header
  