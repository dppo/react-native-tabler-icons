import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrendingUp3 = (props: SvgProps) => (
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
    <Path d="M18 5l3 3l-3 3" />
    <Path d="M3 18h2.397a5 5 0 0 0 4.096 -2.133l4.014 -5.734a5 5 0 0 1 4.096 -2.133h3.397" />
  </Svg>
);
export default SvgTrendingUp3;
