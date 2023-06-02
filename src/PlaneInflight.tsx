import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlaneInflight = (props: SvgProps) => (
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
    <Path d="M15 11.085h5a2 2 0 1 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3l4 7z" />
    <Path d="M3 21h18" />
  </Svg>
);
export default SvgPlaneInflight;
