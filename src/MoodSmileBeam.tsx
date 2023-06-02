import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodSmileBeam = (props: SvgProps) => (
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
    <Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
    <Path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
    <Path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
    <Path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
  </Svg>
);
export default SvgMoodSmileBeam;
