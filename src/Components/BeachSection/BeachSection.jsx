import styles from './BeachSection.module.css';
import ondaGif from '../../assets/Icons/onda.gif';
import tartaruga from '../../assets/Icons/tartaruga.png';

export function BeachSection() {
  return (
    <section id='home' className={styles.container}>
      {/* Fundo de areia e ondas */}
      <div className={styles.sand}>
        <img src={ondaGif} alt="Onda do mar" />
      </div>

      {/* Conteúdo principal */}
      <div className={styles.content}>
        <p>Cada tartaruga salva é um oceano de esperança.</p>

        <div className={styles.turtleGroup}>
          <div className={styles.turtleLeft}>
            <img src={tartaruga} alt="Tartaruga filhote esquerda" />
          </div>

          <div className={styles.turtleCenter}>
            <img src={tartaruga} alt="Tartaruga principal" />
          </div>

          <div className={styles.turtleRight}>
            <img src={tartaruga} alt="Tartaruga filhote direita" />
          </div>
        </div>
      </div>
    </section>
  );
}
