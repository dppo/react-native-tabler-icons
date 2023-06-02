import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceLandlinePhone = (props: SvgProps) => (
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
    <Path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z" />
    <Path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11" />
    <Path d="M12 8h-6v3h6z" />
    <Path d="M12 14v.01" />
    <Path d="M9 14v.01" />
    <Path d="M6 14v.01" />
    <Path d="M12 17v.01" />
    <Path d="M9 17v.01" />
    <Path d="M6 17v.01" />
  </Svg>
);
export default SvgDeviceLandlinePhone;
