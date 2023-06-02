import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBook2 = (props: SvgProps) => (
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
    <Path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
    <Path d="M19 16h-12a2 2 0 0 0 -2 2" />
    <Path d="M9 8h6" />
  </Svg>
);
export default SvgBook2;
