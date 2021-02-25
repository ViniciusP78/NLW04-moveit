
import styles from '../styles/components/Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/diego3g.png" alt="Imagem"/>
      <div>
        <strong>Vinicius Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
    
  )
}

export default Profile