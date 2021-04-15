import { useRootState } from './useRootState';
import { viewActions } from '../store/modules/styleguide';

export default function useStyleGuideView() {
  const isView = useRootState((state) => state.styleguid.isView);

  const onVisiable = () => viewActions.open();
  const onHidden = () => viewActions.close();

  return {
    isView,
    onVisiable,
    onHidden,
  };
}
