import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgShoppingCartDiscount = (props: SvgProps) => (
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
    <Path d="M20 6l-1 7h-13" />
    <Path d="M10 10l6 -6" />
    <Path d="M10.5 4.5m-.5 0a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" />
    <Path d="M15.5 9.5m-.5 0a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" />
  </Svg>
);
export default SvgShoppingCartDiscount;
