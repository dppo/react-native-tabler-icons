import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockCancel = (props: SvgProps) => (
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
    <Path d="M20.997 12.25a9 9 0 1 0 -8.718 8.745" />
    <Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M17 21l4 -4" />
    <Path d="M12 7v5l2 2" />
  </Svg>
);
export default SvgClockCancel;
