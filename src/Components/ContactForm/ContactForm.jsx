import styles from './ContactForm.module.css';

export function ContactForm() {
  return (
    <section id="contato" className={styles.contact}>
      <h2>Entre em Contato</h2>
      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
