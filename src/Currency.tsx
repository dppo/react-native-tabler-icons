import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrency = (props: SvgProps) => (
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
    <Path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <Path d="M4 4l3 3" />
    <Path d="M20 4l-3 3" />
    <Path d="M4 20l3 -3" />
    <Path d="M20 20l-3 -3" />
  </Svg>
);
export default SvgCurrency;
