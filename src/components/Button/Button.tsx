import { ReactNode } from 'react'
import styles from './button.module.css';

interface Props {
     children: ReactNode;
     onClick: () => void;
     color: string;
}


const Button = ({children, onClick, color='primary'}: Props) => {
  return (
    <button className={[styles.btn, styles['btn-' + color]].join(' ')} type="button" onClick={onClick}>
          { children }
    </button>
  )
}

export default Button