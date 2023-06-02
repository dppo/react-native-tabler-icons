import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCertificate2 = (props: SvgProps) => (
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
    <Path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M10 7h4" />
    <Path d="M10 18v4l2 -1l2 1v-4" />
    <Path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" />
  </Svg>
);
export default SvgCertificate2;
