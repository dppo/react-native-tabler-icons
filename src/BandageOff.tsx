import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBandageOff = (props: SvgProps) => (
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
    <Path d="M10 12v.01" />
    <Path d="M12 14v.01" />
    <Path d="M10.513 6.487l1.987 -1.987a4.95 4.95 0 0 1 7 7l-2.018 2.018m-1.982 1.982l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBandageOff;
