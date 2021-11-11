import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton(){
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
  <button 
    type="button" 
    className={styles.signinButton}>
    <FaGithub color="#04d461"/>
    Vivaldo Chagas
    <FiX color="#737380" className={styles.closeIcon} />
  </button>

  ) : (
  <button 
    type="button" 
    className={styles.signinButton}>
    <FaGithub color="#eba417"/>
    Entre com o Github
  </button>
  );
}