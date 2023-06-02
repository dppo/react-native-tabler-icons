import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZoomMoney = (props: SvgProps) => (
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
    <Path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <Path d="M21 21l-6 -6" />
    <Path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
    <Path d="M10 13v1m0 -8v1" />
  </Svg>
);
export default SvgZoomMoney;
