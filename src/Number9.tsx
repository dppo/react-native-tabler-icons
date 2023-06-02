import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNumber9 = (props: SvgProps) => (
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
    <Path d="M16 8a4 4 0 1 0 -8 0v1a4 4 0 1 0 8 0" />
    <Path d="M8 16a4 4 0 1 0 8 0v-8" />
  </Svg>
);
export default SvgNumber9;
