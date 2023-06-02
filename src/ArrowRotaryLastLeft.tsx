import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRotaryLastLeft = (props: SvgProps) => (
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
    <Path d="M15 15a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" />
    <Path d="M15 15v6" />
    <Path d="M12.5 9.5l-6.5 -6.5" />
    <Path d="M11 3h-5v5" />
  </Svg>
);
export default SvgArrowRotaryLastLeft;
