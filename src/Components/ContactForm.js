import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../Hooks/useSubmit";
import Alert from "./Alert";

export default function ContactForm() {
  const { alertMsg, isOpen, onClose, submit } = useSubmit("contact");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      submit("https://example.com/contactme", values);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string()
        .min(25, "Must be 25 characters Minimum")
        .required("Required"),
    }),
  });

  return (
    <Box
      p={6}
      boxShadow="0px 0px 15px -3px rgba(0,0,0,0.1), 0px 0px 6px -2px rgba(0,0,0,0.05)"
    >
      <Alert isOpen={isOpen} onClose={onClose} alertMsg={alertMsg} />
      <form onSubmit={formik.handleSubmit}>
        <Grid
          templateRows={{ base: "repeat(6, 1fr)", lg: "repeat(5, 1fr)" }}
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
        >
          <GridItem h="60px">
            <FormControl
              isInvalid={!!formik.errors.name && formik.touched.name}
            >
              <Input
                type="text"
                placeholder="Your Name"
                h="55px"
                {...formik.getFieldProps("name")}
              />
              <FormErrorMessage fontSize="xs" mt={1}>
                {formik.errors.name}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem h="60px">
            <FormControl
              isInvalid={!!formik.errors.email && formik.touched.email}
            >
              <Input
                type="email"
                placeholder="Your Email"
                h="55px"
                {...formik.getFieldProps("email")}
              />
              <FormErrorMessage fontSize="xs" mt={1}>
                {formik.errors.email}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 2 }} h="60px">
            <FormControl
              isInvalid={!!formik.errors.subject && formik.touched.subject}
            >
              <Input
                type="text"
                placeholder="Subject"
                h="55px"
                {...formik.getFieldProps("subject")}
              />
              <FormErrorMessage fontSize="xs" mt={1}>
                {formik.errors.subject}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 2 }} rowSpan={2}>
            <FormControl
              isInvalid={!!formik.errors.message && formik.touched.message}
            >
              <Textarea
                placeholder="Message"
                rows="5"
                resize="none"
                {...formik.getFieldProps("message")}
              />
              <FormErrorMessage fontSize="xs" mt={1}>
                {formik.errors.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 2 }} textAlign="center">
            <Button
              type="submit"
              colorScheme="red"
              size={{ base: "lg", lg: "md" }}
            >
              Send Message
            </Button>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
}
