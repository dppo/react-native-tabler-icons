import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSwitchHorizontal = (props: SvgProps) => (
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
    <Path d="M16 3l4 4l-4 4" />
    <Path d="M10 7l10 0" />
    <Path d="M8 13l-4 4l4 4" />
    <Path d="M4 17l9 0" />
  </Svg>
);
export default SvgSwitchHorizontal;
