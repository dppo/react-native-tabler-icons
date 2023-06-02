import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowUpRhombus = (props: SvgProps) => (
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
    <Path d="M12 16v-13" />
    <Path d="M15 6l-3 -3l-3 3" />
    <Path d="M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5z" />
  </Svg>
);
export default SvgArrowUpRhombus;
