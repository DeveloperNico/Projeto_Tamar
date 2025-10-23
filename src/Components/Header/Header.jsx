import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/Icons/Logo.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <section>
        <img
          src={logo}
          alt="Logotipo do Projeto Tamar com uma tartaruga marinha estilizada, sobre um fundo simples, transmitindo um tom calmo e acolhedor"
        />
      </section>

      <nav>
        <ul className={styles.navList}>
          <li><a href="#home">Início</a></li>
          <li><a href="#sobre">Sobre nós</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
