import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowMoveLeft = (props: SvgProps) => (
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
    <Path d="M13 12h-10" />
    <Path d="M6 15l-3 -3l3 -3" />
    <Path d="M17 12a2 2 0 1 1 4 0a2 2 0 0 1 -4 0z" />
  </Svg>
);
export default SvgArrowMoveLeft;
