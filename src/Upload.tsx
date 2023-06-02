import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgUpload = (props: SvgProps) => (
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
    <Path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
    <Path d="M7 9l5 -5l5 5" />
    <Path d="M12 4l0 12" />
  </Svg>
);
export default SvgUpload;
