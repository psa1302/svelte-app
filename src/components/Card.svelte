<style>
  .auth {
    margin: 0 auto;
    border-radius: 24px !important;
  }
</style>

<script>
  let title
  let subtitle
</script>

<div class="card w-50 auth">
  <div class="card-body">
    {#if title}
      <h5 class="card-title">{title}</h5>
    {/if}
    {#if subtitle}
      <p class="card-text">{subtitle}</p>
    {/if}
    <slot />
  </div>
</div>
