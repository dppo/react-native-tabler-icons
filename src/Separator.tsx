import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSeparator = (props: SvgProps) => (
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
    <Path d="M3 12l0 .01" />
    <Path d="M7 12l10 0" />
    <Path d="M21 12l0 .01" />
  </Svg>
);
export default SvgSeparator;
