import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrafficCone = (props: SvgProps) => (
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
    <Path d="M4 20l16 0" />
    <Path d="M9.4 10l5.2 0" />
    <Path d="M7.8 15l8.4 0" />
    <Path d="M6 20l5 -15h2l5 15" />
  </Svg>
);
export default SvgTrafficCone;
