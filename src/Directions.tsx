import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDirections = (props: SvgProps) => (
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
    <Path d="M12 21v-4" />
    <Path d="M12 13v-4" />
    <Path d="M12 5v-2" />
    <Path d="M10 21h4" />
    <Path d="M8 5v4h11l2 -2l-2 -2z" />
    <Path d="M14 13v4h-8l-2 -2l2 -2z" />
  </Svg>
);
export default SvgDirections;
