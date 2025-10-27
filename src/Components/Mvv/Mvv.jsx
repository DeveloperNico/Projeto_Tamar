import styles from './Mvv.module.css';

export function Mvv() {
  return (
    <section id='sobre' className={styles.mvv}>
      <h2>Missão, Visão e Valores</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Missão</h3>
          <p>
            A Fundação Projeto Tamar atua no litoral brasileiro desde a década de 80 com a missão de promover a recuperação das tartarugas marinhas, através de ações de pesquisa, conservação e inclusão social.
          </p>
          <p>
            É uma entidade de direito privado, sem fins lucrativos e co-executora do PAN - Plano Nacional de Ação para a Conservação das Tartarugas Marinhas no Brasil do ICMBio/MMA, sendo responsável por grande parte das ações previstas.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Visão</h3>
          <p>
            Ser reconhecida como referência mundial na conservação das tartarugas marinhas e na promoção de práticas sustentáveis que integrem ciência, comunidade e natureza.
          </p>
          <p>
            Buscamos inspirar pessoas e instituições a adotarem atitudes que garantam a preservação dos oceanos e o equilíbrio ambiental para as futuras gerações.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Valores</h3>
          <p>
            Nosso trabalho é guiado pelo respeito à vida marinha, pela ética e pela transparência em todas as ações realizadas.
          </p>
          <p>
            Valorizamos a educação ambiental, o engajamento das comunidades costeiras e a cooperação científica como pilares para transformar consciência em atitude.
          </p>
        </div>
      </div>
    </section>
  );
}
