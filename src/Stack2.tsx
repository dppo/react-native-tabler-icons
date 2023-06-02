import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStack2 = (props: SvgProps) => (
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
    <Path d="M12 4l-8 4l8 4l8 -4l-8 -4" />
    <Path d="M4 12l8 4l8 -4" />
    <Path d="M4 16l8 4l8 -4" />
  </Svg>
);
export default SvgStack2;
