import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZzz = (props: SvgProps) => (
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
    <Path d="M4 12h6l-6 8h6" />
    <Path d="M14 4h6l-6 8h6" />
  </Svg>
);
export default SvgZzz;
