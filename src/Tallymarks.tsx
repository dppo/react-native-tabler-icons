import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTallymarks = (props: SvgProps) => (
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
    <Path d="M6 5l0 14" />
    <Path d="M10 5l0 14" />
    <Path d="M14 5l0 14" />
    <Path d="M18 5l0 14" />
    <Path d="M3 17l18 -10" />
  </Svg>
);
export default SvgTallymarks;
