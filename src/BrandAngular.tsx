import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandAngular = (props: SvgProps) => (
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
    <Path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z" />
    <Path d="M9 15l3 -8l3 8" />
    <Path d="M10 13h4" />
  </Svg>
);
export default SvgBrandAngular;
