import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
const SvgRobot = (props: SvgProps) => (
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
    <Path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z" />
    <Path d="M10 16h4" />
    <Circle cx={8.5} cy={11.5} r={0.5} fill="currentColor" />
    <Circle cx={15.5} cy={11.5} r={0.5} fill="currentColor" />
    <Path d="M9 7l-1 -4" />
    <Path d="M15 7l1 -4" />
  </Svg>
);
export default SvgRobot;
