import styles from "./Menu.module.css"

const Menu = () => {
  return (
    <menu className={styles.container}>
      <div>
        <input type="checkbox" className={styles.checkbox}/>
        <div className={styles.slider}></div>
        <div className={styles.track}></div>
      </div>

    </menu>
  )
}

export default Menu;