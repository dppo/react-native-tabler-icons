import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRoadOff = (props: SvgProps) => (
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
    <Path d="M4 19l3.332 -11.661" />
    <Path d="M16 5l2.806 9.823" />
    <Path d="M12 8v-2" />
    <Path d="M12 13v-1" />
    <Path d="M12 18v-2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgRoadOff;
