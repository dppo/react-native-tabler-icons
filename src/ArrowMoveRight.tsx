import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowMoveRight = (props: SvgProps) => (
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
    <Path d="M11 12h10" />
    <Path d="M18 9l3 3l-3 3" />
    <Path d="M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
  </Svg>
);
export default SvgArrowMoveRight;
