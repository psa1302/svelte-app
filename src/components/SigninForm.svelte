<style>
  .message {
    color: red;
  }
</style>

<script>
  import { navigate } from 'svelte-routing'
  import { Form, Input, Select, Choice } from 'sveltejs-forms'
  import * as yup from 'yup'

  export let onSubmit

  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().min(4),
  })

  const handleSubmit = ({ detail: { values, setSubmitting, resetForm } }) => {
    setSubmitting(false)
    onSubmit({ ...values })
  }
</script>

<Form
  {schema}
  validateOnBlur={false}
  validateOnChange={false}
  on:submit={handleSubmit}
  let:isSubmitting
  let:isValid
>
  <div class="form-group">
    <Input name="email" class="form-control" placeholder="Email" />
  </div>
  <div class="form-group">
    <Input
      name="password"
      type="password"
      class="form-control"
      placeholder="Password"
    />
  </div>
  <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
    Sign in
  </button>
  <span>Or</span>
  <button
    type="button"
    class="btn btn-link"
    on:click={() => navigate('/signup', { replace: true })}
  >
    Sign up
  </button>
</Form>
