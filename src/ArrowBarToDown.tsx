import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowBarToDown = (props: SvgProps) => (
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
    <Path d="M4 20l16 0" />
    <Path d="M12 14l0 -10" />
    <Path d="M12 14l4 -4" />
    <Path d="M12 14l-4 -4" />
  </Svg>
);
export default SvgArrowBarToDown;
