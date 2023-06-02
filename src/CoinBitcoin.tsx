import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCoinBitcoin = (props: SvgProps) => (
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
    <Path d="M9 8h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09" />
    <Path d="M10 12h4" />
    <Path d="M10 7v10v-9" />
    <Path d="M13 7v1" />
    <Path d="M13 16v1" />
  </Svg>
);
export default SvgCoinBitcoin;
