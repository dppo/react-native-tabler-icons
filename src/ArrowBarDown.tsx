import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowBarDown = (props: SvgProps) => (
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
    <Path d="M12 20l0 -10" />
    <Path d="M12 20l4 -4" />
    <Path d="M12 20l-4 -4" />
    <Path d="M4 4l16 0" />
  </Svg>
);
export default SvgArrowBarDown;
