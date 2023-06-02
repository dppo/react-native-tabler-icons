import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
const SvgDice3 = (props: SvgProps) => (
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
    <Path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <Circle cx={8.5} cy={8.5} r={0.5} fill="currentColor" />
    <Circle cx={15.5} cy={15.5} r={0.5} fill="currentColor" />
    <Circle cx={12} cy={12} r={0.5} fill="currentColor" />
  </Svg>
);
export default SvgDice3;
