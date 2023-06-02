import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNumber1 = (props: SvgProps) => (
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
    <Path d="M13 20v-16l-5 5" />
  </Svg>
);
export default SvgNumber1;
