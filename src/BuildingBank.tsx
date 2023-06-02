import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBuildingBank = (props: SvgProps) => (
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
    <Path d="M3 21l18 0" />
    <Path d="M3 10l18 0" />
    <Path d="M5 6l7 -3l7 3" />
    <Path d="M4 10l0 11" />
    <Path d="M20 10l0 11" />
    <Path d="M8 14l0 3" />
    <Path d="M12 14l0 3" />
    <Path d="M16 14l0 3" />
  </Svg>
);
export default SvgBuildingBank;
