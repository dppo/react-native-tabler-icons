import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceTabletFilled = (props: SvgProps) => (
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
    <Path
      d="M18 2a2 2 0 0 1 1.995 1.85l.005 .15v16a2 2 0 0 1 -1.85 1.995l-.15 .005h-12a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-16a2 2 0 0 1 1.85 -1.995l.15 -.005h12zm-6 13a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgDeviceTabletFilled;
