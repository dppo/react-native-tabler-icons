import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZodiacGemini = (props: SvgProps) => (
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
    <Path d="M3 3a21 21 0 0 0 18 0" />
    <Path d="M3 21a21 21 0 0 1 18 0" />
    <Path d="M7 4.5l0 15" />
    <Path d="M17 4.5l0 15" />
  </Svg>
);
export default SvgZodiacGemini;
