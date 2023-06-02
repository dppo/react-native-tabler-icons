import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowBigUpLines = (props: SvgProps) => (
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
    <Path d="M9 12h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v3h-6v-3z" />
    <Path d="M9 21h6" />
    <Path d="M9 18h6" />
  </Svg>
);
export default SvgArrowBigUpLines;
