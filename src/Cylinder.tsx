import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCylinder = (props: SvgProps) => (
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
    <Path d="M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
    <Path d="M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12" />
  </Svg>
);
export default SvgCylinder;
