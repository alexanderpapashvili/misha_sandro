import styles from './page.module.css'
import Header from './components/header/Header'
import Button from './components/button/Button'

export default function Home() {
  return (
    <main className={styles.main}>
     <Header />
     <Button /> 
    </main>
  )
}
