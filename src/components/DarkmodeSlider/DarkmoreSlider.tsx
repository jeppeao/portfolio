import styles from "./DarkmodeSlider.module.css"

interface MenuProps {
  isDarkmode: boolean;
  setDarkmode: (dark: boolean) => void;
}

const DarkmodeSlider = ({isDarkmode, setDarkmode} : MenuProps) => {
  const onToggle = () => {
    setDarkmode(!isDarkmode);
  }
  
  return (
      <div className={styles.container}>
        <input 
          type="checkbox" 
          className={styles.checkbox}
          onChange={onToggle}
          defaultChecked={isDarkmode}
        />
        <div className={styles.slider}>
          {`${isDarkmode ? "dark" : "light"}`}
        </div>
        <div className={styles.track}></div>
      </div>
  )
}

export default DarkmodeSlider;