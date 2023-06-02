import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMouse2 = (props: SvgProps) => (
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
    <Path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
    <Path d="M12 3v7" />
    <Path d="M6 10h12" />
  </Svg>
);
export default SvgMouse2;
