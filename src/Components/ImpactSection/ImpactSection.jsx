import styles from './ImpactSection.module.css';
import canudoPlastico from '../../assets/Images/canudoPlastico.jpg';
import canudoPapel from '../../assets/Images/canudoPapel.jpg';

export function ImpactSection() {
  return (
    <section id="impactos" className={styles.impact}>
      <h2>Impactos Ambientais e Soluções Sustentáveis</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={canudoPlastico} alt="Canudo plástico poluindo o oceano" />
          <p>
            Canudos de plásticos são responsáveis por uma grande parte dos resíduos que atingem os oceanos, afetando diretamente a vida marinha, especialmente tartarugas e aves.
          </p>
        </div>
        <div className={styles.card}>
          <img src={canudoPapel} alt="Canudo de papel ecológico" />
          <p>
            Os canudos de papel são uma alternativa biodegradável e sustentável, que se decompõem rapidamente, reduzindo o impacto ambiental e ajudando a preservar o ecossistema marinho.
          </p>
        </div>
      </div>
    </section>
  );
}
