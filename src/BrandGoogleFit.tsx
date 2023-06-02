import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandGoogleFit = (props: SvgProps) => (
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
    <Path d="M12 9.314l-2.343 -2.344a3.314 3.314 0 0 0 -4.686 4.686l2.343 2.344l4.686 4.686l7.03 -7.03a3.314 3.314 0 0 0 -4.687 -4.685l-7.03 7.029" />
  </Svg>
);
export default SvgBrandGoogleFit;
