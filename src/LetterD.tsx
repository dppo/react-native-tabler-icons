import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterD = (props: SvgProps) => (
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
    <Path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1 -5 5h-6v-16" />
  </Svg>
);
export default SvgLetterD;
