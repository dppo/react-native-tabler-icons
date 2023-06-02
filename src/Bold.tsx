import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBold = (props: SvgProps) => (
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
    <Path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
    <Path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
  </Svg>
);
export default SvgBold;
