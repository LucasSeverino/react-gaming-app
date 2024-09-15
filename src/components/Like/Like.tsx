import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styles from './Like.module.css';
import { useState } from 'react';

interface Props {
     onClick: () => void;
}

const Like = ({ onClick }: Props) => {

     const [status, setStatus] = useState(false);

     const toggle = () => {
          setStatus(!status);
          onClick();
     }

     if (status) return <AiFillHeart cursor="pointer" color="#ff6b81" size="60" onClick={toggle}  />

     return (
          <AiOutlineHeart cursor="pointer" size="60" onClick={toggle}/>
     )
}

export default Like