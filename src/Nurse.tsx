import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNurse = (props: SvgProps) => (
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
    <Path d="M12 6c2.941 0 5.685 .847 8 2.31l-2 9.69h-12l-2 -9.691a14.93 14.93 0 0 1 8 -2.309z" />
    <Path d="M10 12h4" />
    <Path d="M12 10v4" />
  </Svg>
);
export default SvgNurse;
