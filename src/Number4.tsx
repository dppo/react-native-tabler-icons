import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNumber4 = (props: SvgProps) => (
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
    <Path d="M15 20v-15l-8 11h10" />
  </Svg>
);
export default SvgNumber4;
