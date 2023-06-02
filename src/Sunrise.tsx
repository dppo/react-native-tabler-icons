import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSunrise = (props: SvgProps) => (
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
    <Path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
    <Path d="M3 21l18 0" />
    <Path d="M12 9v-6l3 3m-6 0l3 -3" />
  </Svg>
);
export default SvgSunrise;
