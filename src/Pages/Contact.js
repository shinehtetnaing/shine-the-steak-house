import { Container, Heading } from '@chakra-ui/react';
import ContactForm from '../Components/ContactForm'
import ContactInfo from '../Components/ContactInfo';

export default function Contact() {
  return (
    <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
      <Heading size="md" textAlign="center">Contact</Heading>
      <ContactInfo />
      <ContactForm />
    </Container>
  );
}
