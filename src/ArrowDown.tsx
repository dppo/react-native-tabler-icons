import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowDown = (props: SvgProps) => (
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
    <Path d="M12 5l0 14" />
    <Path d="M18 13l-6 6" />
    <Path d="M6 13l6 6" />
  </Svg>
);
export default SvgArrowDown;
