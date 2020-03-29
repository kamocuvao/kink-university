<script>
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons
  } from "@smui/card";
  import Dialog, {
    Title,
    InitialFocus,
    Content as DialogContent,
    Actions as DialogActions
  } from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import { TaskState, classStates } from "../stores";

  let dialog;

  function joinTask() {
    dialog.close();
    $classStates[id] = TaskState.active;
  }

  function completeTask() {
    dialog.close();
    $classStates[id] = TaskState.completed;
  }

  function onClick() {
    if (state === TaskState.inactive) {
      joinTask();
    } else if (state === TaskState.active) {
      completeTask();
    }
  }

  function closeHandler() {}

  export let id = 0;
  export let title = "";
  export let subtitle = "";
  export let description = "";
  export let firstoption = "";
  export let secondoption = "";
  export let firstpass = "";
  export let secondpass = "";
  export let image = "https://loremflickr.com/280/300/ecchi?lock=" + id;
  $: state = $classStates[id];
</script>

<style>
  .mediacontent {
    display: grid;
    justify-items: stretch;
    height: 380px;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content auto min-content;
  }

  .text {
    color: #fff;
    text-shadow: 0 0 5px black;
    text-align: center;
  }

  .active {
    background-color: darkslateblue;
    color: #fff;
    text-align: center;
    grid-row: 4;
  }

  .completed {
    background-color: darkseagreen;
    color: #fff;
    text-align: center;
    grid-row: 4;
  }

  h2,
  h3 {
    margin: 0;
  }
</style>

<Card style="width:280px;">
  <PrimaryAction on:click={() => dialog.open()}>
    <Media style="background-image: url({image}); height:380px;">
      <div class="mediacontent">
        <h2 class="text mdc-typography--headline6">{title}</h2>
        <h3 class="text mdc-typography--subtitle2">{subtitle}</h3>
        {#if state === TaskState.active}
          <h2 class="active mdc-typography--headline6">Active</h2>
        {:else if state === TaskState.completed}
          <h2 class="completed mdc-typography--headline6">Completed</h2>
        {/if}
      </div>
    </Media>
  </PrimaryAction>
</Card>

<Dialog
  bind:this={dialog}
  aria-labelledby="dialog-title"
  aria-describedby="dialog-content"
  on:MDCDialog:closed={closeHandler}>
  <Title id="dialog-title">{title}</Title>
  <DialogContent id="dialog-content">
    {description}
    <hr />
    <h3>Daily task options</h3>
    <hr />
    <p>Option 1: {firstoption}</p>
    <p>Option 2: {secondoption}</p>
    <hr />
    <h3>Exam options</h3>
    <p>Option 1: {firstpass}</p>
    <p>Option 2: {secondpass}</p>
  </DialogContent>
  <DialogActions>
    <Button>
      <Label>Cancel</Label>
    </Button>
    <Button
      on:click={onClick}
      variant="unelevated"
      color="primary"
      default
      use={[InitialFocus]}
      disabled={state === TaskState.completed}>
      <Label>
        {state === TaskState.inactive ? 'Join' : state === TaskState.active ? 'Complete' : 'Already completed'}
      </Label>
    </Button>
  </DialogActions>
</Dialog>
