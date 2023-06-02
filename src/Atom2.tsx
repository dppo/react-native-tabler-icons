import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAtom2 = (props: SvgProps) => (
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
    <Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M12 21l0 .01" />
    <Path d="M3 9l0 .01" />
    <Path d="M21 9l0 .01" />
    <Path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
    <Path d="M16 20.1a9 9 0 0 0 5 -7.1" />
    <Path d="M6.2 5a9 9 0 0 1 11.4 0" />
  </Svg>
);
export default SvgAtom2;
