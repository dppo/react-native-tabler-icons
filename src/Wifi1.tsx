import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWifi1 = (props: SvgProps) => (
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
  </Svg>
);
export default SvgWifi1;
