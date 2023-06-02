import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFountain = (props: SvgProps) => (
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
    <Path d="M9 16v-5a2 2 0 1 0 -4 0" />
    <Path d="M15 16v-5a2 2 0 1 1 4 0" />
    <Path d="M12 16v-10a3 3 0 0 1 6 0" />
    <Path d="M6 6a3 3 0 0 1 6 0" />
    <Path d="M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2z" />
  </Svg>
);
export default SvgFountain;
