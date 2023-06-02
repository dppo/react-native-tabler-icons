import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowBarUp = (props: SvgProps) => (
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
    <Path d="M12 4l0 10" />
    <Path d="M12 4l4 4" />
    <Path d="M12 4l-4 4" />
    <Path d="M4 20l16 0" />
  </Svg>
);
export default SvgArrowBarUp;
