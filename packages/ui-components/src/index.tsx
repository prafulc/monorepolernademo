import * as React from 'react'
import styles from './styles.module.css'

import LoginUsername from './components/loginUsername';

interface Props {
  text: string,
  onClick: any,
  label: string
}

export const ExampleComponent = ({ text, onClick, label }: Props) => {
  return <div className={styles.test}>
      <h2>{text} - <small>{label}</small></h2>
      <LoginUsername handleClick={onClick} />
    </div>
}

ExampleComponent.defaultProps = {
    onClick: () => {},
    label: ''
};
