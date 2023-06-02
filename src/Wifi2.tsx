import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWifi2 = (props: SvgProps) => (
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
    <Path d="M12 18l.01 0" />
    <Path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
    <Path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
  </Svg>
);
export default SvgWifi2;
