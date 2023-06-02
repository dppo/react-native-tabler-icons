import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyTugrik = (props: SvgProps) => (
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
    <Path d="M7 6h10" />
    <Path d="M12 6v13" />
    <Path d="M8 17l8 -3" />
    <Path d="M16 10l-8 3" />
  </Svg>
);
export default SvgCurrencyTugrik;
