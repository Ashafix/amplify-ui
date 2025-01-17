import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconTour = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 4H13H12H7V2H5V4V14V22H7V14H11H12H21L19 9L21 4ZM17.14 9.74L18.04 12H12H11H7V6H12H13H18.05L17.15 8.26L16.85 9L17.14 9.74ZM14 9C14 10.1 13.1 11 12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
