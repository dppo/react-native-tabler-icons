import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgActivity = (props: SvgProps) => (
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
    <Path d="M3 12h4l3 8l4 -16l3 8h4" />
  </Svg>
);
export default SvgActivity;
