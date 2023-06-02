import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNoCopyright = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
    <Path d="M6 6l1.5 1.5" />
    <Path d="M16.5 16.5l1.5 1.5" />
  </Svg>
);
export default SvgNoCopyright;
