<script>
  import Task from "../components/Task.svelte";
</script>

<style>
  .tasks {
    display: flex;
  }
</style>

<svelte:head>
  <title>Classes</title>
</svelte:head>
<div class="tasks">
  <Task active="true" />
  <Task />
</div>
