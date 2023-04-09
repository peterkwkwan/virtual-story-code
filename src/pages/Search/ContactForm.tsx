import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mqkogenl')

  if (state.succeeded) {
    return <p>Thanks for your message!</p>
  }

  return (
    <div style={{ width: '80%' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name">Name</label>
          <input
            required
            placeholder="Your name"
            id="name"
            type="text"
            name="name"
          />
          <label htmlFor="email">Email Address</label>
          <input
            required
            placeholder="Your email"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea required id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button disabled={state.submitting} type="submit">
            Send me a message
          </button>
        </div>
      </form>
    </div>
  )
}
