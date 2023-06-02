import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLeaf = (props: SvgProps) => (
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
    <Path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
    <Path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
  </Svg>
);
export default SvgLeaf;
