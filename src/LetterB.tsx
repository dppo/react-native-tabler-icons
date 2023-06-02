import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterB = (props: SvgProps) => (
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
    <Path d="M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6" />
    <Path d="M7 12l6 0" />
  </Svg>
);
export default SvgLetterB;
