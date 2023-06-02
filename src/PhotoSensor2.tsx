import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPhotoSensor2 = (props: SvgProps) => (
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
    <Path d="M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-2" />
    <Path d="M7 19h-2a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
    <Path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  </Svg>
);
export default SvgPhotoSensor2;
