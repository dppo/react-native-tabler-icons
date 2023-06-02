import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBox = (props: SvgProps) => (
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
    <Path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
    <Path d="M12 12l8 -4.5" />
    <Path d="M12 12l0 9" />
    <Path d="M12 12l-8 -4.5" />
  </Svg>
);
export default SvgBox;
