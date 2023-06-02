import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyRufiyaa = (props: SvgProps) => (
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
    <Path d="M20 16h.01" />
    <Path d="M4 16c9.5 -4 11.5 -8 14 -9" />
    <Path d="M12 8l5 3" />
  </Svg>
);
export default SvgCurrencyRufiyaa;
