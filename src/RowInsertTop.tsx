import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRowInsertTop = (props: SvgProps) => (
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
    <Path d="M4 18v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
    <Path d="M12 9v-4" />
    <Path d="M10 7l4 0" />
  </Svg>
);
export default SvgRowInsertTop;
