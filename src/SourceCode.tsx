import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSourceCode = (props: SvgProps) => (
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
    <Path d="M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" />
    <Path d="M6 5l-2 2l2 2" />
    <Path d="M10 9l2 -2l-2 -2" />
  </Svg>
);
export default SvgSourceCode;
