import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBlur = (props: SvgProps) => (
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
    <Path d="M12 21a9.01 9.01 0 0 0 2.32 -.302a9 9 0 0 0 1.74 -16.733a9 9 0 1 0 -4.06 17.035z" />
    <Path d="M12 3v17" />
    <Path d="M12 12h9" />
    <Path d="M12 9h8" />
    <Path d="M12 6h6" />
    <Path d="M12 18h6" />
    <Path d="M12 15h8" />
  </Svg>
);
export default SvgBlur;
