import * as  React from 'react';
import cn from 'classnames';
import { CommonTypes } from '../types';
import './index.css';

type BadgeTypes = CommonTypes;

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    type?: BadgeTypes;
    /** 幽灵风格，背景变为透明 */
    ghost?: boolean;
}

const Badge: React.FC<BadgeProps> = (props) => {
    const { type, ghost, className, ...restProps } = props;
    const classes = cn(
        'slk-badge',
        `slk-badge-${type || 'default'}`,
        {
            [`slk-badge-ghost`]: Boolean(ghost),
        },
        className
    );
    return <span className={classes} {...restProps} />;
};

export default Badge;