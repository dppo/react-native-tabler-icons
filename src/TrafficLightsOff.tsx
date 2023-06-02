import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrafficLightsOff = (props: SvgProps) => (
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
    <Path d="M8 4c.912 -1.219 2.36 -2 4 -2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1 -10 0v-10" />
    <Path d="M12 8a1 1 0 1 0 -1 -1" />
    <Path d="M11.291 11.295a1 1 0 0 0 1.418 1.41" />
    <Path d="M12 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgTrafficLightsOff;
