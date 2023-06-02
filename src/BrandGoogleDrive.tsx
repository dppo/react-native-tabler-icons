import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandGoogleDrive = (props: SvgProps) => (
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
    <Path d="M12 10l-6 10l-3 -5l6 -10z" />
    <Path d="M9 15h12l-3 5h-12" />
    <Path d="M15 15l-6 -10h6l6 10z" />
  </Svg>
);
export default SvgBrandGoogleDrive;
