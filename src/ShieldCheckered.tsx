import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgShieldCheckered = (props: SvgProps) => (
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
    <Path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
    <Path d="M12 3v18" />
    <Path d="M3.5 12h17" />
  </Svg>
);
export default SvgShieldCheckered;
