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
        title={c.name}
        subtitle={c.subtitle}
        description={c.description}
        firstoption={c.firstoption}
        secondoption={c.secondoption}
        firstpass={c.firstpass}
        secondpass={c.secondpass} />
    </div>
  {/each}
</div>
