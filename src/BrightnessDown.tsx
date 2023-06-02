import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrightnessDown = (props: SvgProps) => (
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
    <Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M12 5l0 .01" />
    <Path d="M17 7l0 .01" />
    <Path d="M19 12l0 .01" />
    <Path d="M17 17l0 .01" />
    <Path d="M12 19l0 .01" />
    <Path d="M7 17l0 .01" />
    <Path d="M5 12l0 .01" />
    <Path d="M7 7l0 .01" />
  </Svg>
);
export default SvgBrightnessDown;
