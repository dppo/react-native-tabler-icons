import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsTransferDown = (props: SvgProps) => (
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
    <Path d="M17 3v6" />
    <Path d="M10 18l-3 3l-3 -3" />
    <Path d="M7 21v-18" />
    <Path d="M20 6l-3 -3l-3 3" />
    <Path d="M17 21v-2" />
    <Path d="M17 15v-2" />
  </Svg>
);
export default SvgArrowsTransferDown;
