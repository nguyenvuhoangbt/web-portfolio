import { Button } from '@mui/material';
import React, { FC } from 'react';
import * as Icons from '@mui/icons-material';

export interface IButton extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'text' | 'outlined' | 'contained';
  icon?: string;
  text?: string;
}

type IconProps = {
  iconName: keyof typeof Icons;
  className: string;
};

const IconComponent: FC<IconProps> = ({ iconName, className }) => {
  const Icon = Icons[iconName];
  return <Icon className={className} />;
};

const ButtonView: React.FC<IButton> = ({
  variant = 'contained',
  icon,
  text,
}: IButton) => {
  return (
    <Button variant={variant} className="font-inherit" w-bg="black">
      <div w-flex="~" w-gap="2" w-items="center">
        {icon && (
          <IconComponent
            iconName={icon as keyof typeof Icons}
            className="text-normal"
          ></IconComponent>
        )}
        {text}
      </div>
    </Button>
  );
};

export default ButtonView;
