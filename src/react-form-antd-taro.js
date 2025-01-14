import Form from './Form';

import CheckList$ from './fields/CheckList';
import Input$ from './fields/Input';
import Picker$ from './fields/Picker';
import Selector$ from './fields/Selector';
import Slider$ from './fields/Slider';
import Switch$ from './fields/Switch';
import TextArea$ from './fields/TextArea';
export * from './Form';
export default Form;
export {default as preset} from './preset';
export {default as ResetButton} from './ResetButton';
export {default as SubmitButton} from './SubmitButton';

export const CheckList = CheckList$;
export const Input = Input$;
export const Picker = Picker$;
export const Selector = Selector$;
export const Slider = Slider$;
export const Switch = Switch$;
export const TextArea = TextArea$;
export const fields = { CheckList, Input, Picker, Selector, Slider, Switch, TextArea };