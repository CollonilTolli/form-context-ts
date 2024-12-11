"use client";

import { useField } from "formik";
import { Box, Text } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/components/ui/radio";

type RadioFieldProps = {
  name: string;
  label: string;
  value: string;
};

const RadioField: React.FC<RadioFieldProps> = ({
  name,
  label,
  value,
  ...props
}) => {
  const [field, meta] = useField({ name, type: "radio", value });
  return (
    <Box>
      <Radio {...field} {...props} id={name} value={value}>
        {label}
      </Radio>
      {meta.touched && meta.error ? (
        <Text color="red.500" fontSize="sm">
          {meta.error}
        </Text>
      ) : null}
    </Box>
  );
};

export default RadioField;
