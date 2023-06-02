import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRuler = (props: SvgProps) => (
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
    <Path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
    <Path d="M4 8l2 0" />
    <Path d="M4 12l3 0" />
    <Path d="M4 16l2 0" />
    <Path d="M8 4l0 2" />
    <Path d="M12 4l0 3" />
    <Path d="M16 4l0 2" />
  </Svg>
);
export default SvgRuler;
