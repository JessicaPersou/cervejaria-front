import styles from "./login.module.css";
import { Link } from "react-router-dom";

export function LoginUser() { 
  return (
      <div className={styles.container}>
        <div className={styles.form1}>
          <div>
              <h1>LOGIN</h1>
          </div>
          <div className={styles.custom}>
            <label className={styles.customLabel}>E-mail</label>
            <input className={styles.customInput} id="email" name="email" />
          </div>
          <div className={styles.custom}>
            <label className={styles.customLabel}>Senha</label>
            <input
              className={styles.customInput}
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div className={styles.btn}>
              <Link className={styles.btnPortal} to="/home">ENTRAR</Link>
          </div>
              <h3>CRIE UMA CONTA</h3>
              <h4>Ainda não tem uma conta no Portal do Malte?</h4>
              <Link className={styles.btnPortal}  to="/register">CADASTRE-SE</Link>
        </div>
      </div>
  );
}
