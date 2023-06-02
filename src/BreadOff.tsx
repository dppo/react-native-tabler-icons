import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBreadOff = (props: SvgProps) => (
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
    <Path d="M18.415 18.414a2 2 0 0 1 -1.415 .586h-10a2 2 0 0 1 -2 -2v-6.764a3 3 0 0 1 .435 -4.795m3.565 -.441h8a3 3 0 0 1 2 5.235v4.765" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBreadOff;
