import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSofa = (props: SvgProps) => (
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
    <Path d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z" />
    <Path d="M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3" />
    <Path d="M12 5v9" />
  </Svg>
);
export default SvgSofa;
