import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodAnnoyed2 = (props: SvgProps) => (
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
    <Path d="M15 14c-2 0 -3 1 -3.5 2.05" />
    <Path d="M10 9.25c-.5 1 -2.5 1 -3 0" />
    <Path d="M17 9.25c-.5 1 -2.5 1 -3 0" />
  </Svg>
);
export default SvgMoodAnnoyed2;
