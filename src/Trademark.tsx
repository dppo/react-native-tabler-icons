import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrademark = (props: SvgProps) => (
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
    <Path d="M4.5 9h5m-2.5 0v6" />
    <Path d="M13 15v-6l3 4l3 -4v6" />
  </Svg>
);
export default SvgTrademark;
