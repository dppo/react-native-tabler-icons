import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWebhookOff = (props: SvgProps) => (
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
    <Path d="M4.876 13.61a4 4 0 1 0 6.124 3.39h6" />
    <Path d="M15.066 20.502a4 4 0 0 0 4.763 -.675m1.171 -2.827a4 4 0 0 0 -4 -4" />
    <Path d="M16 8a4 4 0 0 0 -6.824 -2.833m-1.176 2.833c0 1.506 .77 2.818 2 3.5l-3 5.5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgWebhookOff;
