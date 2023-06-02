import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgShoppingCartPlus = (props: SvgProps) => (
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
    <Path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M17 17h-11v-14h-2" />
    <Path d="M6 5l6 .429m7.138 6.573l-.143 1h-13" />
    <Path d="M15 6h6m-3 -3v6" />
  </Svg>
);
export default SvgShoppingCartPlus;
