import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandOpenvpn = (props: SvgProps) => (
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
    <Path d="M15.618 20.243l-2.193 -5.602a3 3 0 1 0 -2.849 0l-2.193 5.603" />
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  </Svg>
);
export default SvgBrandOpenvpn;
