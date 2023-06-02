import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWorldDollar = (props: SvgProps) => (
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
    <Path d="M20.876 10.51a9 9 0 1 0 -7.839 10.43" />
    <Path d="M3.6 9h16.8" />
    <Path d="M3.6 15h9.9" />
    <Path d="M11.5 3a17 17 0 0 0 0 18" />
    <Path d="M12.5 3a16.986 16.986 0 0 1 2.578 9.02" />
    <Path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
    <Path d="M19 21v1m0 -8v1" />
  </Svg>
);
export default SvgWorldDollar;
