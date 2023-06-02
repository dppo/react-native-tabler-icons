import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgShieldHalfFilled = (props: SvgProps) => (
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
    <Path d="M12 11h8.9" />
    <Path d="M12 8h8.9" />
    <Path d="M12 5h3.1" />
    <Path d="M12 17h6.2" />
    <Path d="M12 14h8" />
  </Svg>
);
export default SvgShieldHalfFilled;
