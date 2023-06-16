import styles from './page.module.css'
import Button from './components/button/Button'
import Header from './components/header/Header'
import Icon from './components/Icon/Icon'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Icon />
     <Button /> 
    </main>
  )
}
