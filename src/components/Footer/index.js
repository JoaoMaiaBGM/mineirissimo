import Link from "next/link";
import styles from "./footer.module.scss";

import {
  IoLogoInstagram,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

import { InstagramFeed } from "components/InstagramFeed";
import { AnimatedElement } from "utils/animations";

export function Footer() {
  return (
    <AnimatedElement element="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.content} col-3`}>
          <header className={styles.instagram}>
            <IoLogoInstagram className={styles.logoInstagram} />
            <h5 className={styles.contentTitle}>Instagram</h5>
          </header>
          <ul className={styles.socialLinksList}>
            <li className={styles.sociaLlink}>
              <Link
                target="_blank"
                href="http://instagram.com/mineirissimo.recife"
                rel="noopener noreferrer"
              >
                <InstagramFeed />
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${styles.content} col-3`}>
          <h5 className={styles.contentTitle}>Informações</h5>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/politicas_de_privacidade">
                Políticas de privacidade
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/termos_e_condicoes">Termos e condições</Link>
            </li>
          </ul>
        </div>

        <div className={`${styles.content} col-4`}>
          <h5 className={styles.contentTitle}>Sobre</h5>
          <ul className={styles.list}>
            <li className={styles.item}>
              <IoLocationOutline />
              R. Sergio Magalhães, 54 Graças Recife-PE
            </li>

            <li className={styles.item}>
              <Link
                href="mailto:mineirissimoartesanal@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMailOutline />
                mineirissimoartesanal@gmail.com
              </Link>
            </li>

            <li className={styles.item}>Telefone: (81)9.9627-2423</li>
          </ul>
        </div>
      </div>

      <div className={styles.contentRights}>
        <p>©2010 Mineirissimo. Todos os direitos reservados.</p>
      </div>
    </AnimatedElement>
  );
}
