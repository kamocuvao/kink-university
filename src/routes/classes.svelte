<script>
  import Task from "../components/Task.svelte";
  import { classes, classStates, TaskState } from "../stores";
</script>

<style>
  .tasks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .task {
    margin: 20px;
  }
</style>

<svelte:head>
  <title>Classes</title>
</svelte:head>

<div class="tasks">
  {#each $classes as c}
    <div class="task">
      <Task
        id={c.id}
        title={c.title}
        subtitle={c.subtitle}
        description={c.description} />
    </div>
  {/each}
</div>
Class States:
{#each $classes as c}
  <p>{$classStates[c.id]}</p>
{/each}
