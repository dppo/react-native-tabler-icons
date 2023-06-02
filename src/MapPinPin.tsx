import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMapPinPin = (props: SvgProps) => (
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
    <Path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <Path d="M12.783 21.326a2 2 0 0 1 -2.196 -.426l-4.244 -4.243a8 8 0 1 1 13.657 -5.62" />
    <Path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
    <Path d="M19 18v.01" />
  </Svg>
);
export default SvgMapPinPin;
