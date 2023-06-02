import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBoxAlignRight = (props: SvgProps) => (
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
    <Path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" />
    <Path d="M8.998 20.003h.01" />
    <Path d="M3.997 20.003h.011" />
    <Path d="M3.997 15.002h.011" />
    <Path d="M3.997 9.002h.011" />
    <Path d="M3.997 4.002h.011" />
    <Path d="M8.998 4.002h.01" />
  </Svg>
);
export default SvgBoxAlignRight;
