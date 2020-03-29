<script>
  import { classes, classStates, TaskState } from "../stores";
</script>

<svelte:head>
  <title>Settings</title>
</svelte:head>

<h1>Settings</h1>
Class States:
{#each $classes as c}
  <p>{c.name}: {TaskState.toString($classStates[c.id])}</p>
{/each}
