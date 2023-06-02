import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgEyeCheck = (props: SvgProps) => (
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
    <Path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <Path d="M11.143 17.961c-3.221 -.295 -5.936 -2.281 -8.143 -5.961c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.222 .37 -.449 .722 -.68 1.057" />
    <Path d="M15 19l2 2l4 -4" />
  </Svg>
);
export default SvgEyeCheck;
