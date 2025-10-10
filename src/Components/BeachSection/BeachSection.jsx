import styles from './BeachSection.module.css';
import ondaGif from '../../assets/Icons/onda.gif';
import tartaruga from '../../assets/Icons/tartaruga.png';

export function BeachSection() {
  return (
    <section className={styles.container}>
      {/* Areia */}
      <div className={styles.sand}>
        <img src={ondaGif} alt="Gif de onda" />
        <img src={ondaGif} alt="Gif de onda" />
        <img src={ondaGif} alt="Gif de onda" />
      </div>

      <div className={styles.content}>
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

        <div>
          <p>
            A Fundação Projeto Tamar atua no litoral brasileiro desde a década de 80 com a missão de promover a recuperação das tartarugas marinhas, através de ações de pesquisa, conservação e inclusão social.
          </p>
          <p>
            É uma entidade de direito privado, sem fins lucrativos e co-executora do PAN - Plano Nacional de Ação para a Conservação das Tartarugas Marinhas no Brasil do ICMBio/MMA, sendo responsável por grande parte das ações previstas.
          </p>
        </div>
      </div>
    </section>
  );
}
