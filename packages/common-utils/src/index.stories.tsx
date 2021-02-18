import * as React from 'react'
// import { formatDate } from './formatDate';
import CommonUtilityComponent from './index';

export default {
   title: 'CommonUtilityComponent'
}

export const basicUtility = ()=> <CommonUtilityComponent text="Basic CommonUtilityComponent" />
export const secondaryUtility = ()=> <CommonUtilityComponent text="Secondary CommonUtility Component" date={new Date('02-02-2021')} />
