import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTextIncrease = (props: SvgProps) => (
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
    <Path d="M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5" />
    <Path d="M4 13h7" />
    <Path d="M18 9v6" />
    <Path d="M21 12h-6" />
  </Svg>
);
export default SvgTextIncrease;
