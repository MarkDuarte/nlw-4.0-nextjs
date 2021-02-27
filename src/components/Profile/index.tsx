import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import styles from '../../styles/components/Profile.module.css';

export function Profile() {
  const {} = useContext(ChallengesContext);
  
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/51549798?s=460&u=4a834e39e36c09f657c13ecf3fddb14b3ca17712&v=4" alt="Marcos Duarte"/>
      <div>
        <strong>Marcos Duarte</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
        </p>
        <p>Level 1</p>
      </div>
    </div>
  )
}