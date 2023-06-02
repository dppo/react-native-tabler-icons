import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
const SvgPacman = (props: SvgProps) => (
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
    <Path d="M5.636 5.636a9 9 0 0 1 13.397 .747l-5.619 5.617l5.619 5.617a9 9 0 1 1 -13.397 -11.981z" />
    <Circle cx={11.5} cy={7.5} r={1} fill="currentColor" />
  </Svg>
);
export default SvgPacman;
