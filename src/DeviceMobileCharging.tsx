import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceMobileCharging = (props: SvgProps) => (
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
    <Path d="M6 3m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
    <Path d="M11 4h2" />
    <Path d="M12 9.5l-1 2.5h2l-1 2.5" />
  </Svg>
);
export default SvgDeviceMobileCharging;
