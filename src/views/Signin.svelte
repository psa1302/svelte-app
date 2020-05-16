<style>
  :global(.auth-image-container) {
    height: 200px;
  }

  :global(.auth-image-container img) {
    height: 100%;
  }

  :global(.auth-container) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(.auth-title) {
    color: #007bff;
  }
</style>

<script>
  import { getClient, mutate } from 'svelte-apollo'
  import { SIGNIN } from '../resources/mutaions'

  import Card from '../components/Card.svelte'
  import SigninForm from '../components/SigninForm.svelte'

  const client = getClient()

  async function signin(email, password) {
    try {
      await mutate(client, {
        mutation: SIGNIN,
        variables: { email, password },
      })
    } catch (error) {
      console.log(error)
    }
  }
</script>

<div class="auth-container h-100 w-100">
  <Card>
    <h3 class="text-center mb-4 auth-title">Sign In</h3>
    <div class="row">
      <div class="col auth-image-container text-center">
        <img src="/assets/img/signin.png" alt="signin.png" />
      </div>
      <div class="col">
        <SigninForm
          onSubmit={({ email, password }) => signin(email, password)}
        />
      </div>
    </div>
  </Card>
</div>
