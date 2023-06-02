import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGolfOff = (props: SvgProps) => (
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
    <Path d="M12 18v-6m0 -4v-5l7 4l-5.07 2.897" />
    <Path d="M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgGolfOff;
