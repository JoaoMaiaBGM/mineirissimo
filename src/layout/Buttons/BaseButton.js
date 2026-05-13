import styles from "./buttons.module.scss";
import capitalize from "utils/capitalize";

export function BaseButton({ children, className, Icon, size = "medium" }) {
  const sizeClass = `button${capitalize(size)}`;
  const sizeClassName = styles[sizeClass];

  return (
    <button className={`${styles.button} ${className} ${sizeClassName}`}>
      {Icon && <Icon className={styles.icon} />}
      {children}
    </button>
  );
}
