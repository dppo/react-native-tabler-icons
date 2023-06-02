import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLogicAnd = (props: SvgProps) => (
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
    <Path d="M22 12h-5" />
    <Path d="M2 9h5" />
    <Path d="M2 15h5" />
    <Path d="M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z" />
  </Svg>
);
export default SvgLogicAnd;
