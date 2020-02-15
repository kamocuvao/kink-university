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

  let dialog;

  function joinTask() {
    // TODO
  }

  function closeHandler() {}

  export let title = "Title";
  export let subtitle = "This is a subtitle.";
  export let image = "https://via.placeholder.com/280x380.png?text=280x380";
  export let active = false;
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
        {#if active}
          <h2 class="active mdc-typography--headline6">Active</h2>
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
  <Title id="dialog-title">Do you want to join this task?</Title>
  <DialogContent id="dialog-content">Description of task.</DialogContent>
  <DialogActions>
    <Button>
      <Label>Cancel</Label>
    </Button>
    <Button
      on:click={joinTask}
      variant="unelevated"
      color="primary"
      default
      use={[InitialFocus]}>
      <Label>Join</Label>
    </Button>
  </DialogActions>
</Dialog>
