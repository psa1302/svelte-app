<script>
  import { Router, Route } from 'svelte-routing'

  import Signin from '../views/Signin.svelte'
  import Signup from '../views/Signup.svelte'

  import * as ROUTES from '../resources/routeNames'
</script>

<Router>
  <Route path={ROUTES.SIGNUP} component={Signup} />
  <Route path={ROUTES.SIGNIN} component={Signin} />
  <Route path={ROUTES.PUBLIC_WILDCARD} component={Signin} />
</Router>
