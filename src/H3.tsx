import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgH3 = (props: SvgProps) => (
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
    <Path d="M19 14a2 2 0 1 0 -2 -2" />
    <Path d="M17 16a2 2 0 1 0 2 -2" />
    <Path d="M4 6v12" />
    <Path d="M12 6v12" />
    <Path d="M11 18h2" />
    <Path d="M3 18h2" />
    <Path d="M4 12h8" />
    <Path d="M3 6h2" />
    <Path d="M11 6h2" />
  </Svg>
);
export default SvgH3;
