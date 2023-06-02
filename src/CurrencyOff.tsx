import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyOff = (props: SvgProps) => (
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
    <Path d="M18.531 14.524a7 7 0 0 0 -9.06 -9.053m-2.422 1.582a7 7 0 0 0 9.903 9.896" />
    <Path d="M4 4l3 3" />
    <Path d="M20 4l-3 3" />
    <Path d="M4 20l3 -3" />
    <Path d="M20 20l-3 -3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCurrencyOff;
