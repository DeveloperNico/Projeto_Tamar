import styles from './Mvv.module.css';

export function Mvv() {
    return (
        <section id='sobre' class={styles.mvv}>
            <h2>Missão, Visão e Valores</h2>
            <div class={styles.cards}>
                <div class={styles.card}>
                    <h3>Missão</h3>
                    <p>A Fundação Projeto Tamar atua no litoral brasileiro desde a década de 80 com a missão de promover a recuperação das tartarugas marinhas, através de ações de pesquisa, conservação e inclusão social.</p>
                    <p>É uma entidade de direito privado, sem fins lucrativos e co-executora do PAN - Plano Nacional de Ação para a Conservação das Tartarugas Marinhas no Brasil do ICMBio/MMA, sendo responsável por grande parte das ações previstas.</p>
                </div>
                <div class={styles.card}>
                    <h3>Visão</h3>
                    <p>Um futuro sustentável, onde o mar e a vida coexistem em harmonia.</p>
                </div>
                <div class={styles.card}>
                    <h3>Valores</h3>
                    <p>Respeito à natureza, educação ambiental e trabalho comunitário.</p>
                </div>
            </div>
        </section>

    )
}