import React, { HTMLAttributes } from 'react';
import ClassicEditor from 'itm-ckeditor';
import CKEditor from '@ckeditor/ckeditor5-react';

export interface FieldEditorProps extends HTMLAttributes<HTMLElement> {
  [key: string]: any;
}

export const FieldEditor = (props: any) => {
  let { isInvalid, className, ...fieldProps } = props;

  if (isInvalid) className += ' is-invalid';

  return (
    <div className={className}>
      <CKEditor editor={ClassicEditor} {...fieldProps} />
    </div>
  );
};
