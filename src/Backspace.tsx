import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBackspace = (props: SvgProps) => (
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
    <Path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z" />
    <Path d="M12 10l4 4m0 -4l-4 4" />
  </Svg>
);
export default SvgBackspace;
