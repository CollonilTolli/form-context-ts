import { Field } from "@/components/ui/field";
import { Input } from "@chakra-ui/react";
import { FocusEvent } from "react";

interface FormFieldProps {
  errors: any;
  touched: any;
  values: any;
  fieldKey: string;
  label:string
  handleBlur?: (e: FocusEvent<any, Element>) => void;
  handleChange?:(e: FocusEvent<any, Element>) => void;
}

const FormField = ({
  errors,
  touched,
  values,
  handleBlur,
  handleChange,
  fieldKey,
  label,
}: FormFieldProps) => {
  return (
    <Field
      label={label}
      invalid={!!errors[fieldKey] && touched[fieldKey]}
      errorText={errors[fieldKey]}
    >
      <Input
        id={fieldKey}
        name={fieldKey}
        type={typeof values[fieldKey] === 'number' ? 'number' : 'text'}
        onChange={handleChange}
        padding={4}
        onBlur={handleBlur}
        value={values[fieldKey]}
        variant="subtle"
        color={'white'}
      />
    </Field>
  );
};

export default FormField;