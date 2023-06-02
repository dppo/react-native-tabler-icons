import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBuildingArch = (props: SvgProps) => (
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
    <Path d="M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15" />
    <Path d="M9 21v-8a3 3 0 0 1 6 0v8" />
  </Svg>
);
export default SvgBuildingArch;
