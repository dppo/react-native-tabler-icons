import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyDollarOff = (props: SvgProps) => (
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
    <Path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4m-2.557 1.431a3 3 0 0 0 2.557 4.569h2m4.564 4.558a3 3 0 0 1 -2.564 1.442h-4a3 3 0 0 1 -2.7 -2" />
    <Path d="M12 3v3m0 12v3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCurrencyDollarOff;
