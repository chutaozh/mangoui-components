import * as  React from 'react';
import cn from 'classnames';
import { CommonTypes } from '../types';
import './button.css';

type ButtonTypes = CommonTypes;

interface ButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
    type?: ButtonTypes;
    /** 幽灵风格，背景变为透明 */
    ghost?: boolean;
    /** 块级元素 */
    block?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /** 尺寸 */
    size?: 'sm' | 'lg';
}

const Button: React.FC<ButtonProps> = (props) => {
    const { ghost, type, disabled, size, block, className, ...restProps } = props;
    const classes = cn(
        'slk-btn',
        `slk-btn-${type || 'default'}`,
        {
            [`slk-btn-${size}`]: size,
            'slk-btn-disabled': disabled,
            'slk-btn-ghost': ghost,
            'slk-btn-block': block,
        },
        className
    );
    return <button className={classes} {...restProps} />;
};

export default Button;