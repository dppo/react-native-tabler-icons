import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCloudDownload = (props: SvgProps) => (
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
    <Path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
    <Path d="M12 13l0 9" />
    <Path d="M9 19l3 3l3 -3" />
  </Svg>
);
export default SvgCloudDownload;
