import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgExternalLink = (props: SvgProps) => (
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
    <Path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
    <Path d="M11 13l9 -9" />
    <Path d="M15 4h5v5" />
  </Svg>
);
export default SvgExternalLink;
