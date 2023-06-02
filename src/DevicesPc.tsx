import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDevicesPc = (props: SvgProps) => (
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
    <Path d="M3 5h6v14h-6z" />
    <Path d="M12 9h10v7h-10z" />
    <Path d="M14 19h6" />
    <Path d="M17 16v3" />
    <Path d="M6 13v.01" />
    <Path d="M6 16v.01" />
  </Svg>
);
export default SvgDevicesPc;
