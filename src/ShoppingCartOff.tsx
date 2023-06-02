import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgShoppingCartOff = (props: SvgProps) => (
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
    <Path d="M17 17a2 2 0 1 0 2 2" />
    <Path d="M17 17h-11v-11" />
    <Path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgShoppingCartOff;
