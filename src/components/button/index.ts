import Button from './button';
import ButtonGroup from './button-group';

type ButtonComponent = typeof Button & {
    Group: typeof ButtonGroup;
};

const _button = Button as ButtonComponent;
_button.Group = ButtonGroup;
export default _button;