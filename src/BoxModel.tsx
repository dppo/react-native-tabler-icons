import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBoxModel = (props: SvgProps) => (
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
    <Path d="M8 8h8v8h-8z" />
    <Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <Path d="M16 16l3.3 3.3" />
    <Path d="M16 8l3.3 -3.3" />
    <Path d="M8 8l-3.3 -3.3" />
    <Path d="M8 16l-3.3 3.3" />
  </Svg>
);
export default SvgBoxModel;
