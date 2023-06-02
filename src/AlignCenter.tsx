import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAlignCenter = (props: SvgProps) => (
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
    <Path d="M4 6l16 0" />
    <Path d="M8 12l8 0" />
    <Path d="M6 18l12 0" />
  </Svg>
);
export default SvgAlignCenter;
