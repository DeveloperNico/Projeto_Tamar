import styles from './Header.module.css';
import logo from '../../assets/Icons/Logo.png';

export function Header() {
  return (
    <header>
      <section>
        <img src={logo} alt="Logotipo do Projeto Tamar com uma tartaruga marinha estilizada, sobre um fundo simples, transmitindo um tom calmo e acolhedor" />
      </section>

      <nav>
        <ul className={styles.navList}>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header> 
  );
};