import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandCrunchbase = (props: SvgProps) => (
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
    <Path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <Path d="M10.414 11.586a2 2 0 1 0 0 2.828" />
    <Path d="M15 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M13 7v6" />
  </Svg>
);
export default SvgBrandCrunchbase;
