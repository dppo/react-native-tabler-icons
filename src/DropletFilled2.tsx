import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDropletFilled2 = (props: SvgProps) => (
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
    <Path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
    <Path d="M6 14h12" />
    <Path d="M7.305 17.695l3.695 -3.695" />
    <Path d="M10.26 19.74l5.74 -5.74l-5.74 5.74z" />
  </Svg>
);
export default SvgDropletFilled2;
