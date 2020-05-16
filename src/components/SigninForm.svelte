<script>
  import { navigate } from 'svelte-routing'
</script>

<form>
  <div class="form-group">
    <input
      placeholder="Email"
      type="email"
      class="form-control"
      id="inputEmail4"
    />
  </div>
  <div class="form-group">
    <input
      placeholder="Password"
      type="password"
      class="form-control"
      id="inputPassword4"
    />
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">Remember Me</label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
  <span>Or</span>
  <button
    type="button"
    class="btn btn-link"
    on:click={() => navigate('/signup', { replace: true })}
  >
    Sign up
  </button>
</form>
