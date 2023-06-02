import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgViewfinderOff = (props: SvgProps) => (
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
    <Path d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08" />
    <Path d="M12 3v4" />
    <Path d="M12 21v-3" />
    <Path d="M3 12h4" />
    <Path d="M21 12h-3" />
    <Path d="M12 12v.01" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgViewfinderOff;
