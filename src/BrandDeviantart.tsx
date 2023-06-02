import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandDeviantart = (props: SvgProps) => (
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
    <Path d="M18 3v4l-3.857 6h3.857v4h-6.429l-2.571 4h-3v-4l3.857 -6h-3.857v-4h6.429l2.571 -4z" />
  </Svg>
);
export default SvgBrandDeviantart;
