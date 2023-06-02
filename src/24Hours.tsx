import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Svg24Hours = (props: SvgProps) => (
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
    <Path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
    <Path d="M4 13a8.094 8.094 0 0 0 3 5.24" />
    <Path d="M11 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
    <Path d="M17 15v2a1 1 0 0 0 1 1h1" />
    <Path d="M20 15v6" />
  </Svg>
);
export default Svg24Hours;
