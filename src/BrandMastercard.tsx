import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandMastercard = (props: SvgProps) => (
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
    <Path d="M14 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M12 9.765a3 3 0 1 0 0 4.47" />
    <Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
  </Svg>
);
export default SvgBrandMastercard;
