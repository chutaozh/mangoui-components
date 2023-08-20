import * as  React from 'react';
import cn from 'classnames';
import { CommonTypes } from '../types';
import './index.css';

type AlertTypes = CommonTypes;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: AlertTypes;
    /** 幽灵风格，背景变为透明 */
    ghost?: boolean;
    /** 高亮颜色/背景 */
    highlighted?: boolean;
    /** 是否可关闭 */
    closable?: boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
    const { type, ghost, highlighted, className, children, closable, ...restProps } = props;
    const ref = React.useRef<any>();
    const [destroy, setDestroy] = React.useState(false);

    const handleClose = () => {
        const _style = Object.entries(props.style || {})
            .filter(([key]) => key !== 'opacity')
            .concat([['opacity', 0]])
            .map(([key, value]) => `${key}: ${value}`).join(';');
        ref.current?.setAttribute('style', _style);

        const timer = setTimeout(() => {
            setDestroy(true);
            clearTimeout(timer);
        }, 200);
    };

    const classes = cn(
        'slk-alert',
        `slk-alert-${type || 'default'}`,
        {
            'slk-alert-closable': closable,
            'slk-alert-ghost': ghost,
            'slk-alert-highlighted': highlighted
        },
        className
    );

    if (destroy) {
        return null;
    }

    return (<div className={classes}  {...restProps} ref={ref}>
        <div className="slk-alert-content">{children}</div>
        {closable && <span
            className="slk-alert-close"
            onClick={handleClose}>×</span>
        }
    </div>);
};

export default Alert;