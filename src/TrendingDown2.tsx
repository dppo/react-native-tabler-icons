import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrendingDown2 = (props: SvgProps) => (
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
    <Path d="M3 6h5l7 10h6" />
    <Path d="M18 19l3 -3l-3 -3" />
  </Svg>
);
export default SvgTrendingDown2;
