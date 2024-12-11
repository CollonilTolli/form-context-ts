"use client";

import { useField } from "formik";
import { Box, Text } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";

type CheckboxFieldProps = {
  name: string;
  label: string;
  description?: string;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  description,
  ...props
}) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  return (
    <Box>
      <Checkbox {...field} {...props} gap="4" alignItems="flex-start">
        <Box lineHeight="1">{label}</Box>
        {description && (
          <Box fontWeight="normal" color="gray.500" mt="1">
            {description}
          </Box>
        )}
      </Checkbox>
      {meta.touched && meta.error ? (
        <Text color="red.500" fontSize="sm">
          {meta.error}
        </Text>
      ) : null}
    </Box>
  );
};

export default CheckboxField;
