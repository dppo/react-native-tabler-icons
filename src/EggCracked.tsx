import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgEggCracked = (props: SvgProps) => (
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
    <Path d="M19 14.083c0 4.154 -2.966 6.74 -7 6.917c-4.2 0 -7 -2.763 -7 -6.917c0 -5.538 3.5 -11.09 7 -11.083c3.5 .007 7 5.545 7 11.083z" />
    <Path d="M12 3l-1.5 5l3.5 2.5l-2 3.5" />
  </Svg>
);
export default SvgEggCracked;
