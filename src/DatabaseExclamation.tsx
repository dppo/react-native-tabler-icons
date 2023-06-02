import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDatabaseExclamation = (props: SvgProps) => (
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
    <Path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
    <Path d="M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.182 -.086 3.148 -.241m4.852 -2.759v-6" />
    <Path d="M4 12v6c0 1.657 3.582 3 8 3c1.064 0 2.079 -.078 3.007 -.22" />
    <Path d="M19 16v3" />
    <Path d="M19 22v.01" />
  </Svg>
);
export default SvgDatabaseExclamation;
