import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsJoin = (props: SvgProps) => (
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
    <Path d="M3 7h5l3.5 5h9.5" />
    <Path d="M3 17h5l3.495 -5" />
    <Path d="M18 15l3 -3l-3 -3" />
  </Svg>
);
export default SvgArrowsJoin;
