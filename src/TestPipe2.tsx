import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTestPipe2 = (props: SvgProps) => (
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
    <Path d="M15 3v15a3 3 0 0 1 -6 0v-15" />
    <Path d="M9 12h6" />
    <Path d="M8 3h8" />
  </Svg>
);
export default SvgTestPipe2;
