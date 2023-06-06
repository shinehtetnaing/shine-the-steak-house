import {
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Image,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  FormErrorMessage,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../Hooks/useSubmit";
import Alert from "./Alert";

export default function ReservationForm() {
  const [isLoading, setIsLoading] = useState(true);
  const { alertMsg, isOpen, onClose, submit } = useSubmit("reservation");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      noOfPeople: "",
      message: "",
    },
    onSubmit: (values) => {
      submit("https://example.com/contactme", values);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      noOfPeople: Yup.number()
        .min(1, "At least one person needed")
        .required("Required"),
      message: Yup.string().nullable(),
    }),
  });

  const handleNumberInputChange = (valueString) => {
    // initial number set empty string for placeholder display and it needs to increase as integer
    const valueNumber = parseInt(valueString, 10);
    formik.setFieldValue("noOfPeople", valueNumber);
  };

  // prevent entering negative value
  const handleNumberDecrement = () => {
    if (formik.values.noOfPeople > 0) {
      formik.setFieldValue("noOfPeople", formik.values.noOfPeople - 1);
    }
  };

  return (
    <Flex
      as="section"
      direction={{ base: "column", md: "row" }}
      mt={10}
      alignItems="center"
      boxShadow="0px 0px 15px -3px rgba(0,0,0,0.1), 0px 0px 6px -2px rgba(0,0,0,0.05)"
    >
      <Box>
        <Skeleton isLoaded={!isLoading} h="100%">
          <Image
            src={require("../Assets/Images/reservation.jpg")}
            alt="reservation"
            w={{ base: "100%", lg: "xl" }}
            onLoad={() => setIsLoading(false)}
            display={isLoading ? "none" : "block"}
          />
        </Skeleton>
      </Box>
      <Box p={{ base: 4, md: 8, lg: 12 }} w={{ base: "100%" }}>
        <Alert isOpen={isOpen} onClose={onClose} alertMsg={alertMsg} />
        <form onSubmit={formik.handleSubmit}>
          <Grid
            templateRows={{
              base: "repeat(9, 1fr)",
              md: "repeat(6, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            <GridItem h="55px">
              <FormControl
                isInvalid={!!formik.errors.name && formik.touched.name}
              >
                <Input
                  type="text"
                  placeholder="Your Name"
                  h="50px"
                  {...formik.getFieldProps("name")}
                />
                <FormErrorMessage fontSize="xs" mt={1}>
                  {formik.errors.name}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem h="55px">
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                <Input
                  type="email"
                  placeholder="Your Email"
                  h="50px"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage fontSize="xs" mt={1}>
                  {formik.errors.email}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem h="55px">
              <FormControl
                isInvalid={!!formik.errors.phone && formik.touched.phone}
              >
                <Input
                  type="text"
                  placeholder="Your Phone"
                  h="50px"
                  {...formik.getFieldProps("phone")}
                />
                <FormErrorMessage fontSize="xs" mt={1}>
                  {formik.errors.phone}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem h="55px">
              <FormControl
                isInvalid={!!formik.errors.date && formik.touched.date}
              >
                <Input
                  type="text"
                  placeholder="Date"
                  h="50px"
                  onFocus={(e) => (e.target.type = "date")}
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage fontSize="xs" mt={1}>
                  {formik.errors.date}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem h="55px">
              <FormControl
                isInvalid={!!formik.errors.time && formik.touched.time}
              >
                <Input
                  type="text"
                  placeholder="Time"
                  h="50px"
                  onFocus={(e) => (e.target.type = "time")}
                  {...formik.getFieldProps("time")}
                />
                <FormErrorMessage fontSize="xs" mt={1}>
                  {formik.errors.time}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem h="55px">
              <FormControl
                isInvalid={
                  !!formik.errors.noOfPeople && formik.touched.noOfPeople
                }
              >
                <NumberInput {...formik.getFieldProps("noOfPeople")} size="lg">
                  <NumberInputField placeholder="# of people" />
                  <NumberInputStepper>
                    <NumberIncrementStepper
                      onClick={() =>
                        handleNumberInputChange(formik.values.noOfPeople + 1)
                      }
                    />
                    <NumberDecrementStepper onClick={handleNumberDecrement} />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage fontSize="xs" mt={1}>
                  {formik.errors.noOfPeople}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2, lg: 3 }} rowSpan={2}>
              <FormControl>
                <Textarea
                  placeholder="Message (Optional)"
                  rows="5"
                  resize="none"
                  {...formik.getFieldProps("message")}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2, lg: 3 }} textAlign="center">
              <Button
                type="submit"
                colorScheme="red"
                size={{ base: "lg", lg: "md" }}
              >
                Book a Table
              </Button>
            </GridItem>
          </Grid>
        </form>
      </Box>
    </Flex>
  );
}
