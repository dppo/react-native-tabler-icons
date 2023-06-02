import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowUpSquare = (props: SvgProps) => (
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
    <Path d="M12 17l0 -14" />
    <Path d="M15 6l-3 -3l-3 3" />
    <Path d="M10 21v-4h4v4z" />
  </Svg>
);
export default SvgArrowUpSquare;
