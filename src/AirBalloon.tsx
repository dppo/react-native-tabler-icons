import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAirBalloon = (props: SvgProps) => (
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
    <Path d="M10 19m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M12 16c3.314 0 6 -4.686 6 -8a6 6 0 1 0 -12 0c0 3.314 2.686 8 6 8z" />
    <Path d="M12 9m-2 0a2 7 0 1 0 4 0a2 7 0 1 0 -4 0" />
  </Svg>
);
export default SvgAirBalloon;
