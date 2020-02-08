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
</script>

<style>
  .text {
    color: #fff;
    position: absolute;
    bottom: 16px;
    left: 16px;
  }

  h2,
  h3 {
    margin: 0;
  }
</style>

<Card style="width: 320px;">
  <PrimaryAction on:click={handleClick()}>
    <Media
      style="background-image:
      url(https://via.placeholder.com/320x320.png?text=square);"
      aspectRatio="square">
      <div class="text">
        <h2 class="mdc-typography--headline6">A card with square media.</h2>
        <h3 class="mdc-typography--subtitle2">And a subtitle.</h3>
      </div>
    </Media>
  </PrimaryAction>
</Card>
