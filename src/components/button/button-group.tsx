import * as  React from 'react';
import cn from 'classnames';
import './button-group.css';

export interface ButtonGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    direction?: 'horizontal' | 'vertical';
    children: React.ReactNode;
}

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
    const { direction, className, ...restProps } = props;
    const classes = cn('slk-btn-group', { [`slk-btn-group-${direction}`]: Boolean(direction) }, className);
    return (<div {...restProps} className={classes} />);
}

export default ButtonGroup;