import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandCarbon = (props: SvgProps) => (
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
    <Path d="M14 10v-.2a1.8 1.8 0 0 0 -1.8 -1.8h-.4a1.8 1.8 0 0 0 -1.8 1.8v4.4a1.8 1.8 0 0 0 1.8 1.8h.4a1.8 1.8 0 0 0 1.8 -1.8v-.2" />
    <Path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
  </Svg>
);
export default SvgBrandCarbon;
