import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircles = (props: SvgProps) => (
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
    <Path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M6.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M17.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  </Svg>
);
export default SvgCircles;
