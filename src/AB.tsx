import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAB = (props: SvgProps) => (
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
    <Path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
    <Path d="M12 6l0 12" />
    <Path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" />
  </Svg>
);
export default SvgAB;
