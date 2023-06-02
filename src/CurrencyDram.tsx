import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyDram = (props: SvgProps) => (
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
    <Path d="M4 10a6 6 0 1 1 12 0v10" />
    <Path d="M12 16h8" />
    <Path d="M12 12h8" />
  </Svg>
);
export default SvgCurrencyDram;
