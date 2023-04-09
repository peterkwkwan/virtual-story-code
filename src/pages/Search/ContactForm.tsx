import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 80%;
  label,
  input,
  textarea {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }
  input,
  textarea {
    background: transparent;
    color: ${(props) => props.theme.palette.text01};
    :focus {
      outline: none;
    }
  }
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 300;
  color: ${(props) => props.theme.palette.text02};
  margin-bottom: 4px;
`

const Input = styled.input`
  width: 50%;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.palette.divider};
  margin-bottom: 20px;
  font-size: 1.5rem;
  :focus {
    border-bottom: 2px solid ${(props) => props.theme.palette.vsCodeBlue};
  }
`

const TextArea = styled.textarea`
  font-size: 1rem;
  border: 2px solid ${(props) => props.theme.palette.divider};
`

const SubmitButton = styled.button`
  width: fit-content;
  padding: 12px 24px;
  margin: 20px 0 40px;
  cursor: pointer;
  background-color: red;
  border: none;
  color: ${(props) => props.theme.palette.text01};
`

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mqkogenl')

  if (state.succeeded) {
    return <p>Thanks for your message!</p>
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Label htmlFor="name">Name</Label>
          <Input required id="name" type="text" name="name" />

          <Label htmlFor="email">Email address</Label>
          <Input required id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <Label htmlFor="message">Message</Label>
          <TextArea required id="message" name="message" rows={6} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <SubmitButton disabled={state.submitting} type="submit">
            Send me a message
          </SubmitButton>
        </div>
      </form>
    </Container>
  )
}
