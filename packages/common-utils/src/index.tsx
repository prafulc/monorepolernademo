import * as React from 'react'
import styles from './styles.module.css'
import { formatDate } from './formatDate';
import { ChildComponent } from './testComponent';

interface Props {
  text: string,
  date?: Date
}

export default class ExampleComponent extends React.Component <Props> {
  render () {
    return (
      <div className={styles.test}>
        {this.props.text}: <span className={styles.date}>{formatDate(this.props.date)}</span>
        <ChildComponent />
      </div>
    );
  }
}
