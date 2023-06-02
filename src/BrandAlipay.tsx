import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandAlipay = (props: SvgProps) => (
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
    <Path d="M19 3h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z" />
    <Path d="M7 7h10" />
    <Path d="M12 3v7" />
    <Path d="M21 17.314c-2.971 -1.923 -15 -8.779 -15 -1.864c0 1.716 1.52 2.55 2.985 2.55c3.512 0 6.814 -5.425 6.814 -8h-6.604" />
  </Svg>
);
export default SvgBrandAlipay;
