import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCoinRupee = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M15 8h-6h1a3 3 0 0 1 0 6h-1l3 3" />
    <Path d="M9 11h6" />
  </Svg>
);
export default SvgCoinRupee;
