import styles from './BeachSection.module.css';
import ondaGif from '../../assets/Icons/onda.gif';
import tartaruga from '../../assets/Icons/tartaruga.png';

export function BeachSection() {
  return (
    <section id='home' className={styles.container}>
      {/* Areia */}
      <div className={styles.sand}>
        <img src={ondaGif} alt="Gif de onda" />
        <img src={ondaGif} alt="Gif de onda" />
        <img src={ondaGif} alt="Gif de onda" />
      </div>

      <div className={styles.content}>
        <div>
          <p>
            Cada tartaruga salva é um oceano de esperança.
          </p>
        </div>

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
