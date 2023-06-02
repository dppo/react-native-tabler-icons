import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWashDryDip = (props: SvgProps) => (
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
    <Path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
    <Path d="M12 7v10" />
    <Path d="M16 7v10" />
    <Path d="M8 7v10" />
  </Svg>
);
export default SvgWashDryDip;
