import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMessageDots = (props: SvgProps) => (
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
    <Path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
    <Path d="M12 11l0 .01" />
    <Path d="M8 11l0 .01" />
    <Path d="M16 11l0 .01" />
  </Svg>
);
export default SvgMessageDots;
