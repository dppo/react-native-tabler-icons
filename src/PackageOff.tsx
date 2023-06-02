import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPackageOff = (props: SvgProps) => (
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
    <Path d="M8.812 4.793l3.188 -1.793l8 4.5v8.5m-2.282 1.784l-5.718 3.216l-8 -4.5v-9l2.223 -1.25" />
    <Path d="M14.543 10.57l5.457 -3.07" />
    <Path d="M12 12v9" />
    <Path d="M12 12l-8 -4.5" />
    <Path d="M16 5.25l-4.35 2.447m-2.564 1.442l-1.086 .611" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgPackageOff;
