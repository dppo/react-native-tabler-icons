import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMist = (props: SvgProps) => (
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
    <Path d="M5 5h3m4 0h9" />
    <Path d="M3 10h11m4 0h1" />
    <Path d="M5 15h5m4 0h7" />
    <Path d="M3 20h9m4 0h3" />
  </Svg>
);
export default SvgMist;
