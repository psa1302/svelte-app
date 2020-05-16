<script>
  import { navigate } from 'svelte-routing'
  import { Form, Input, Select, Choice } from 'sveltejs-forms'
  import * as yup from 'yup'

  export let onSubmit

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    handle: yup.string().required(),
    password: yup.string().min(4),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })

  const handleSubmit = ({ detail: { values, setSubmitting, resetForm } }) => {
    const { passwordConfirmation, ...rest } = values
    setSubmitting(false)
    onSubmit({ ...rest })
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
    <Input name="name" class="form-control" placeholder="Name" />
  </div>
  <div class="form-group">
    <Input name="email" class="form-control" placeholder="Email" />
  </div>
  <div class="form-group">
    <Input name="handle" class="form-control" placeholder="Username" />
  </div>
  <div class="form-group">
    <Input
      name="password"
      type="password"
      class="form-control"
      placeholder="Password"
    />
  </div>
  <div class="form-group">
    <Input
      name="passwordConfirmation"
      type="password"
      class="form-control"
      placeholder="Confirm Password"
    />
  </div>
  <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
    Sign up
  </button>
  <span>Or</span>
  <button
    type="button"
    class="btn btn-link"
    on:click={() => navigate('/signin', { replace: true })}
  >
    Sign in
  </button>
</Form>
