import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import styled from 'styled-components'

const Container = styled.div`
  border-top: 3px dotted ${(props) => props.theme.palette.dark04};
  padding-top: 40px;
  margin: 0 auto;
  width: 80%;
  label,
  input,
  textarea,
  button {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    transition: all 0.25s;
  }
  input,
  textarea {
    background: transparent;
  }
  input,
  textarea,
  button {
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
  resize: none;
  :focus {
    border: 2px solid ${(props) => props.theme.palette.vsCodeBlue};
  }
`

const SubmitButton = styled.button`
  width: 200px;
  padding: 12px 24px;
  margin: 20px 0 40px;
  cursor: pointer;
  background: ${(props) => props.theme.palette.vsCodeDeepBlue};

  border: 2px solid transparent;
  :hover,
  :focus {
    color: white;
    background: ${(props) => props.theme.palette.vsCodeBlue};
  }
  :disabled {
    border: 2px solid ${(props) => props.theme.palette.divider};
    background: ${(props) => props.theme.palette.dark02};
    color: ${(props) => props.theme.palette.text01};
    cursor: default;
  }
`

const Icon = styled.img`
  width: 12px;
  height: 12px;
`

const LoadingIcon = styled(Icon)`
  animation: spin 1s infinite linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mqkogenl')

  const getButtonText = () => {
    if (state.succeeded)
      return (
        <ButtonContent>
          <Icon src="/assets/icons/check.svg" alt="completed" />
          <span style={{ marginLeft: '4px' }}>Sent!</span>
        </ButtonContent>
      )
    if (state.submitting)
      return <LoadingIcon src="/assets/icons/loading.svg" alt="loading" />
    return (
      <ButtonContent>
        <Icon src="/assets/icons/mail.svg" alt="email" />
        <span style={{ marginLeft: '4px' }}>Send me a message</span>
      </ButtonContent>
    )
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
          <SubmitButton
            disabled={state.submitting || state.succeeded}
            type="submit"
            aria-label="Submit form"
          >
            {getButtonText()}
          </SubmitButton>
        </div>
      </form>
    </Container>
  )
}
