<script>
  import { getClient, mutate } from 'svelte-apollo'

  import Card from '../components/Card.svelte'
  import SignupForm from '../components/SignupForm.svelte'
</script>

<div class="auth-container h-100 w-100">
  <Card>
    <h3 class="text-center mb-4 auth-title">Sign Up</h3>
    <div class="row">
      <div class="col auth-image-container">
        <img src="/assets/img/signup.png" alt="signup.png" />
      </div>
      <div class="col">
        <SignupForm />
      </div>
    </div>
  </Card>
</div>
