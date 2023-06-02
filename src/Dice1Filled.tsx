import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDice1Filled = (props: SvgProps) => (
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
    <Path
      d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-6.333 8.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgDice1Filled;
