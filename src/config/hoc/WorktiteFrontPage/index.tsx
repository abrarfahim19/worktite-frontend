import withData from './withData';
import withLayout from './withLayout';
import { compose } from '@/config/utilities/helpers';

export default compose(withData, withLayout);
