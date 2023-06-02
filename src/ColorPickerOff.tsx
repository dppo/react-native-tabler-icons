import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgColorPickerOff = (props: SvgProps) => (
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
    <Path d="M11 7l6 6" />
    <Path d="M12 8l3.699 -3.699a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-3.702 3.702m-2 2l-6 6h-4v-4l6 -6" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgColorPickerOff;
