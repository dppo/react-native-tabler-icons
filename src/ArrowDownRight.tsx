import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowDownRight = (props: SvgProps) => (
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
    <Path d="M7 7l10 10" />
    <Path d="M17 8l0 9l-9 0" />
  </Svg>
);
export default SvgArrowDownRight;
