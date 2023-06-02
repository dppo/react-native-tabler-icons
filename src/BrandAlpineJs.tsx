import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandAlpineJs = (props: SvgProps) => (
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
    <Path d="M3 11.5l4.5 4.5h9l-9 -9z" />
    <Path d="M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5" />
  </Svg>
);
export default SvgBrandAlpineJs;
