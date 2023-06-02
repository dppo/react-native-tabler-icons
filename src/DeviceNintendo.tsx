import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
const SvgDeviceNintendo = (props: SvgProps) => (
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
    <Path d="M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z" />
    <Path d="M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z" />
    <Circle cx={17.5} cy={15.5} r={1} fill="currentColor" />
    <Circle cx={6.5} cy={8.5} r={1} fill="currentColor" />
  </Svg>
);
export default SvgDeviceNintendo;
