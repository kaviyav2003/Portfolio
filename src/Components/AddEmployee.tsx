import styled from "styled-components";

const ContactSection = styled.section`
  background-color: #fcfcfcff;
  color: #fef9f5;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #36454f;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

const Label = styled.label`
  font-size: 1em;
  margin-bottom: 2rem;
  color: #696969ff;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 2px solid #8e8d8cff;
  border-radius: 10px;
  background-color: #ffffffff;
  color: #36454f;
  font-size: 1rem;

`;

const Textarea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
   border: 2px solid #8e8d8cff;
  border-radius: 10px;
  background-color: #ffffffff;
  color: #36454f;
  font-size: 1rem;

`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: #5f5c5bff;
  color: #fef9f5;
  font-size: 1.2rem;
  

`;

// const Div = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 1rem;
// `;

const ContactComponent = () => {
  return (
    <ContactSection>
      <Title>Add Employee Form</Title>

      <Form>

        <Label htmlFor="name">Name</Label>
        <Input placeholder="Name" required />
        <Label htmlFor="id">Employee Id</Label>
        <Input type="number" placeholder="Id" required />
        <Label htmlFor="company">Company</Label>
        <Input placeholder="Company" required />
        <Label htmlFor="department">Department</Label>
        <Input type="text" placeholder="Department" required />

        <Button type="submit">Add Employee</Button>
      </Form>
    </ContactSection>
  );
};

export default ContactComponent;
