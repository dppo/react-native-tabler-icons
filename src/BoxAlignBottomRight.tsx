import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBoxAlignBottomRight = (props: SvgProps) => (
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
    <Path d="M19 13h-5a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-5a1 1 0 0 0 -1 -1z" />
    <Path d="M20 9v.01" />
    <Path d="M20 4v.01" />
    <Path d="M15 4v.01" />
    <Path d="M9 4v.01" />
    <Path d="M9 20v.01" />
    <Path d="M4 4v.01" />
    <Path d="M4 9v.01" />
    <Path d="M4 15v.01" />
    <Path d="M4 20v.01" />
  </Svg>
);
export default SvgBoxAlignBottomRight;
