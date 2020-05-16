<script>
  import { getClient, mutate } from 'svelte-apollo'
  import { SIGNUP } from '../resources/mutations'

  import Card from '../components/Card.svelte'
  import SignupForm from '../components/SignupForm.svelte'

  const client = getClient()

  async function signup(values) {
    try {
      await mutate(client, {
        mutation: SIGNUP,
        variables: values,
      })
    } catch (error) {
      console.log(error)
    }
  }
</script>

<div class="auth-container h-100 w-100">
  <Card>
    <h3 class="text-center mb-4 auth-title">Sign Up</h3>
    <div class="row">
      <div class="col auth-image-container">
        <img src="/assets/img/signup.png" alt="signup.png" />
      </div>
      <div class="col">
        <SignupForm onSubmit={values => signup(values)} />
      </div>
    </div>
  </Card>
</div>
