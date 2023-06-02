import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterY = (props: SvgProps) => (
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
    <Path d="M7 4l5 9l5 -9" />
    <Path d="M12 13l0 7" />
  </Svg>
);
export default SvgLetterY;
