import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNetwork = (props: SvgProps) => (
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
    <Path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    <Path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
    <Path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
    <Path d="M6 9h12" />
    <Path d="M3 19h7" />
    <Path d="M14 19h7" />
    <Path d="M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M12 15v2" />
  </Svg>
);
export default SvgNetwork;
