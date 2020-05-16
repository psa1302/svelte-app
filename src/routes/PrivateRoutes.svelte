<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Home from '../views/Home.svelte'
  import * as ROUTES from '../resources/routeNames'
</script>

<Router>
  <Route path={ROUTES.HOME} component={Home} />
  <Route path={ROUTES.PRIVATE_WILDCARD} component={Home} />
</Router>
