import styles from './StoriesSection.module.css';
import depo1 from '../../assets/Images/depo1.jpg';
import depo2 from '../../assets/Images/depo2.jpg';

export function StoriesSection() {
  return (
    <section id="historias" className={styles.stories}>
      <h2>Histórias que Inspiram</h2>
      <div className={styles.depoimentos}>
        <div className={styles.card}>
          <img src={depo1} alt="Voluntário segurando uma tartaruga resgatada" />
          <p>"Participar do Projeto Tamar mudou minha visão sobre o cuidado com o oceano. Cada tartaruga salva é um símbolo de esperança!"</p>
          <span>— Roberto, voluntária</span>
        </div>
        <div className={styles.card}>
          <img src={depo2} alt="Crianças em atividade de educação ambiental" />
          <p>"Aprender sobre o impacto do plástico me fez mudar hábitos e inspirar minha escola a usar apenas canudos de papel."</p>
          <span>— Ana, estudante</span>
        </div>
      </div>
    </section>
  );
}
