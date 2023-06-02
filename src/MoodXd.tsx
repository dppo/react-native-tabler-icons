import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodXd = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
    <Path d="M9 14h6a3 3 0 1 1 -6 0z" />
    <Path d="M9 8l6 3" />
    <Path d="M9 11l6 -3" />
  </Svg>
);
export default SvgMoodXd;
