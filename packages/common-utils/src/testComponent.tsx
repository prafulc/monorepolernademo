import * as React from 'react'

interface Props {}

export const ChildComponent = ({ }: Props) => {
  return (
    <div className=''>
      <span className=''>Child Component with button <button> Click me! </button></span>
    </div>
  );
}
