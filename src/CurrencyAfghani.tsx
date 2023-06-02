import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyAfghani = (props: SvgProps) => (
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
    <Path d="M15 13h-3.5a3.5 3.5 0 1 1 3.5 -3.5v6.5h-7" />
    <Path d="M12 3v.01" />
    <Path d="M12 19v2" />
  </Svg>
);
export default SvgCurrencyAfghani;
