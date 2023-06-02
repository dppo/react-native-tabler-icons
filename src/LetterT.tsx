import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterT = (props: SvgProps) => (
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
    <Path d="M6 4l12 0" />
    <Path d="M12 4l0 16" />
  </Svg>
);
export default SvgLetterT;
