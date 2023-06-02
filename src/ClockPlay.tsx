import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockPlay = (props: SvgProps) => (
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
    <Path d="M12 7v5l2 2" />
    <Path d="M17 22l5 -3l-5 -3z" />
    <Path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" />
  </Svg>
);
export default SvgClockPlay;
