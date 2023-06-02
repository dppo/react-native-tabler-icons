import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockMinus = (props: SvgProps) => (
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
    <Path d="M20.477 15.022a9 9 0 1 0 -7.998 5.965" />
    <Path d="M12 7v5l3 3" />
    <Path d="M16 19h6" />
  </Svg>
);
export default SvgClockMinus;
