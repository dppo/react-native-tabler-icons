import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgIroning3 = (props: SvgProps) => (
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
    <Path d="M12 15h.01" />
    <Path d="M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8" />
    <Path d="M9 15h.01" />
    <Path d="M15 15h.01" />
  </Svg>
);
export default SvgIroning3;
