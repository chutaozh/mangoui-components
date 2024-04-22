import * as  React from 'react';
import cn from 'classnames';
import { CommonTypes } from '../types';
import './index.css';

type SwitchTypes = CommonTypes;

interface SwitchProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
    type?: SwitchTypes;
    size?: 'small' | 'large';
    checked?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
    onText?: string;
    offText?: string;
    onChange?: (checked: boolean) => void;
}

const Switch: React.FunctionComponent<SwitchProps> = (props) => {
    const { type, size, className, disabled, checked, defaultChecked, onText, offText, onChange, ...restProps } = props;
    const classes = cn('mui-switch', {
        [`mui-switch-${type}`]: Boolean(type),
        [`mui-switch-${size}`]: Boolean(size),
        'mui-switch-disabled': disabled,
        'mui-switch-text': Boolean(onText) || Boolean(offText),
    }, className);

    return (
        <label className={classes} {...restProps}>
            <input
                type="checkbox"
                className="mui-switch-input"
                disabled={disabled}
                defaultChecked={defaultChecked}
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
            />
            <span className="mui-switch-label" data-on={onText} data-off={offText} />
            <span className="mui-switch-handle" />
        </label>
    );
};

export default Switch;