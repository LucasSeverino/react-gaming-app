import React from 'react'

interface Props {
     buttonType?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light';
     children: string,
     onClick: () => void
}

const Button = ({ buttonType = 'primary', children, onClick }: Props) => {
  return (
    <button type="button" className={`btn btn-${buttonType}`} onClick={onClick}>
          { children }
    </button>
  )
}

export default Button