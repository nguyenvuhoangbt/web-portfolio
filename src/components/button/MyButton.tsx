// Libraries
import * as Icons from '@mui/icons-material';
import React, { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface MyButtonProps extends ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  icon?: string;
  iconClassName?: string;
  text?: string;
}

type IconProps = {
  iconName: keyof typeof Icons;
  className: string;
};

export const IconComponent: FC<IconProps> = ({ iconName, className }) => {
  const Icon = Icons[iconName];
  return <Icon className={className} />;
};

const MyButton: React.FC<MyButtonProps> = ({
  variant = 'contained',
  icon,
  iconClassName = 'text-normal',
  text,
  ...props
}: MyButtonProps) => {
  return (
    <Button
      variant={variant}
      w-font="inherit"
      w-min-w="0"
      w-rounded="sm"
      w-h="8"
      {...props}
    >
      <div w-flex="~" w-gap="2" w-items="center" w-font="bold">
        {icon && (
          <IconComponent
            iconName={icon as keyof typeof Icons}
            className={iconClassName}
          />
        )}
        {text}
      </div>
    </Button>
  );
};

export default MyButton;
