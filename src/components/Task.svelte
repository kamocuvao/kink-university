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

  function handleClick() {
    console.log("clicked");
  }

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
  <PrimaryAction on:click={handleClick()}>
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
