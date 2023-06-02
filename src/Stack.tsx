import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStack = (props: SvgProps) => (
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
    <Path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
    <Path d="M4 14l8 4l8 -4" />
  </Svg>
);
export default SvgStack;
