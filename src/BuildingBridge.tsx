import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBuildingBridge = (props: SvgProps) => (
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
    <Path d="M6 5l0 14" />
    <Path d="M18 5l0 14" />
    <Path d="M2 15l20 0" />
    <Path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2" />
    <Path d="M12 10l0 5" />
  </Svg>
);
export default SvgBuildingBridge;
