import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSteam = (props: SvgProps) => (
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
    <Path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M4 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M20 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M5.5 5.5l3 3" />
    <Path d="M15.5 15.5l3 3" />
    <Path d="M18.5 5.5l-3 3" />
    <Path d="M8.5 15.5l-3 3" />
  </Svg>
);
export default SvgSteam;
