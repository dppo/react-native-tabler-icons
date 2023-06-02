import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgXboxA = (props: SvgProps) => (
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
    <Path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
    <Path d="M15 16l-3 -8l-3 8" />
    <Path d="M14 14h-4" />
  </Svg>
);
export default SvgXboxA;
