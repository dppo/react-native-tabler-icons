import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDiamond = (props: SvgProps) => (
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
    <Path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
    <Path d="M10 12l-2 -2.2l.6 -1" />
  </Svg>
);
export default SvgDiamond;
