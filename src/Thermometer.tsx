import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgThermometer = (props: SvgProps) => (
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
    <Path d="M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0z" />
    <Path d="M16 7l-1.5 -1.5" />
    <Path d="M13 10l-1.5 -1.5" />
    <Path d="M10 13l-1.5 -1.5" />
    <Path d="M7 17l-3 3" />
  </Svg>
);
export default SvgThermometer;
