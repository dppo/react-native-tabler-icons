import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZodiacCapricorn = (props: SvgProps) => (
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
    <Path d="M4 4a3 3 0 0 1 3 3v9" />
    <Path d="M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3" />
    <Path d="M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </Svg>
);
export default SvgZodiacCapricorn;
