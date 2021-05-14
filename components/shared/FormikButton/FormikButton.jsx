import { useFormikContext } from 'formik';

import { Button } from 'components';

export function FormikButton({ children, ...rest }) {
  const { isValid } = useFormikContext();
  return (
    <Button {...rest} disabled={!isValid}>
      {children}
    </Button>
  );
}
