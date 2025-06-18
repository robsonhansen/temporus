import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/robsonhansen/temporus" target="_blank">
        Themporus &copy; {new Date().getFullYear()} -{" "}
      </a>
      <a href="https://github.com/robsonhansen" target="_blank">
        Desenvolvido por Robson Hansen
      </a>
    </footer>
  );
}
