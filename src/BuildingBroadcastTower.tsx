import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBuildingBroadcastTower = (props: SvgProps) => (
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
    <Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M16.616 13.924a5 5 0 1 0 -9.23 0" />
    <Path d="M20.307 15.469a9 9 0 1 0 -16.615 0" />
    <Path d="M9 21l3 -9l3 9" />
    <Path d="M10 19h4" />
  </Svg>
);
export default SvgBuildingBroadcastTower;
