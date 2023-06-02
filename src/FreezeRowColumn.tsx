import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFreezeRowColumn = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
    <Path d="M15 3l-12 12" />
    <Path d="M9.5 3l-6 6" />
    <Path d="M20 3.5l-5.5 5.5" />
    <Path d="M9 15l-5 5" />
    <Path d="M21 9h-12v12" />
  </Svg>
);
export default SvgFreezeRowColumn;
