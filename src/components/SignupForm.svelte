<script>
  import { navigate } from 'svelte-routing'
</script>

<form>
  <div class="form-group">
    <input placeholder="Name" class="form-control" id="inputName" />
  </div>
  <div class="form-group">
    <input
      placeholder="Email"
      type="email"
      class="form-control"
      id="inputEmail4"
    />
  </div>
  <div class="form-group">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">@</div>
      </div>
      <input
        type="text"
        class="form-control"
        id="inlineFormInputGroup"
        placeholder="Username"
      />
    </div>
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
    <input
      placeholder="Re-Enter Password"
      type="password"
      class="form-control"
      id="rePass"
    />
  </div>
  <button type="submit" class="btn btn-primary">Sign Up</button>
  <span>Or</span>
  <button
    type="button"
    class="btn btn-link"
    on:click={() => navigate('/signin', { replace: true })}
  >
    Sign in
  </button>
</form>
