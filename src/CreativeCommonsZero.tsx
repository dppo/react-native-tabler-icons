import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCreativeCommonsZero = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M12 12m-3 0a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
    <Path d="M14 9l-4 6" />
  </Svg>
);
export default SvgCreativeCommonsZero;
