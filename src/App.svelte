<script>
  import { Router, Route } from 'svelte-routing'

  import PublicRoutes from './routes/PublicRoutes.svelte'
  import PrivateRoutes from './routes/PrivateRoutes.svelte'

  import ApolloClient from 'apollo-boost'
  import { setClient } from 'svelte-apollo'

  const client = new ApolloClient({ uri: 'http://localhost:4000' })
  setClient(client)
</script>

<main class="h-100 w-100">
  <PublicRoutes />
</main>
