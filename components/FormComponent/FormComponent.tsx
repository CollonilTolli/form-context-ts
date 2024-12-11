"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import { Flex } from "@chakra-ui/react";
import validationSchema from "@/components/schemas/validationSchema";
import FormField from "@/components/FormFields/FormField";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface initialValuesType {
  name: string;
  address: string;
  floor: number;
  totalFloors: number;
  square: number;
  livingSquare: number;
  kitchenSquare: number;
}

const FormComponent: React.FC = () => {
  const initialValues: initialValuesType = {
    name: "",
    address: "",
    floor: 0,
    totalFloors: 0,
    square: 0,
    livingSquare: 0,
    kitchenSquare: 0,
  };

  const fields = [
    { key: "name", label: "Название объекта" },
    { key: "address", label: "Адрес" },
    { key: "floor", label: "Этаж" },
    { key: "totalFloors", label: "Количество этажей в доме" },
    { key: "square", label: "Площадь" },
    { key: "livingSquare", label: "Жилая площадь" },
    { key: "kitchenSquare", label: "Площадь кухни" },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: initialValuesType) => {
    setIsLoading(true);
    try {
      await axios.post("/api/telegram", values);
      console.log("Данные успешно отправлены в Telegram");
    } catch (error) {
      console.log("Ошибка при отправке данных в Telegram");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => (
        <Form>
          <Flex
            background="white"
            borderRadius={16}
            direction="column"
            padding="8"
            gap={4}
            color="black"
          >
            {fields.map((field) => (
              <FormField
                key={field.key}
                errors={errors}
                touched={touched}
                values={values}
                handleBlur={handleBlur}
                handleChange={handleChange}
                fieldKey={field.key}
                label={field.label}
              />
            ))}
            <Button
              type="submit"
              colorPalette="teal"
              variant="subtle"
              padding={6}
              loading={isLoading}
              loadingText="Отправляю..."
            >
              Отправить
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
