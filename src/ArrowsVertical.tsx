import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsVertical = (props: SvgProps) => (
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
    <Path d="M8 7l4 -4l4 4" />
    <Path d="M8 17l4 4l4 -4" />
    <Path d="M12 3l0 18" />
  </Svg>
);
export default SvgArrowsVertical;
