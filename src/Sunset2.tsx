import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSunset2 = (props: SvgProps) => (
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
    <Path d="M3 13h1" />
    <Path d="M20 13h1" />
    <Path d="M5.6 6.6l.7 .7" />
    <Path d="M18.4 6.6l-.7 .7" />
    <Path d="M8 13a4 4 0 1 1 8 0" />
    <Path d="M3 17h18" />
    <Path d="M7 20h5" />
    <Path d="M16 20h1" />
    <Path d="M12 5v-1" />
  </Svg>
);
export default SvgSunset2;
