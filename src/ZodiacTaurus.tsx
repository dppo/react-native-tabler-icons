import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZodiacTaurus = (props: SvgProps) => (
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
    <Path d="M6 3a6 6 0 0 0 12 0" />
    <Path d="M12 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
  </Svg>
);
export default SvgZodiacTaurus;
