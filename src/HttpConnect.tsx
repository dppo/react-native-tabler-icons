import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHttpConnect = (props: SvgProps) => (
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
    <Path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
    <Path d="M17 16v-8l4 8v-8" />
    <Path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
  </Svg>
);
export default SvgHttpConnect;
