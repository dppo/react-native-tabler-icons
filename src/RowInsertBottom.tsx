import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRowInsertBottom = (props: SvgProps) => (
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
    <Path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z" />
    <Path d="M12 15l0 4" />
    <Path d="M14 17l-4 0" />
  </Svg>
);
export default SvgRowInsertBottom;
