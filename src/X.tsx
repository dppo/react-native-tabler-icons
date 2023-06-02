import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgX = (props: SvgProps) => (
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
    <Path d="M18 6l-12 12" />
    <Path d="M6 6l12 12" />
  </Svg>
);
export default SvgX;
