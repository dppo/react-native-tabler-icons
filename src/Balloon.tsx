import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBalloon = (props: SvgProps) => (
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
    <Path d="M14 8a2 2 0 0 0 -2 -2" />
    <Path d="M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9" />
    <Path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" />
  </Svg>
);
export default SvgBalloon;
