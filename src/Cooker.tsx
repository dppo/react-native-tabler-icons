import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCooker = (props: SvgProps) => (
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
    <Path d="M12 7h.01" />
    <Path d="M15 7h.01" />
    <Path d="M9 7h.01" />
    <Path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
    <Path d="M9 15h6" />
    <Path d="M5 11h14" />
  </Svg>
);
export default SvgCooker;
