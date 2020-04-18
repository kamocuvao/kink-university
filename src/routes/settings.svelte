<script>
  import { get } from "svelte/store";
  import { classes, classStates, TaskState } from "../stores";
  import Button, { Label } from "@smui/button";

  function onSave() {
    const data = get(classStates);
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(data));
    var dlAnchorElem = document.getElementById("downloadAnchorElem");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "kink-university.json");
    dlAnchorElem.click();
  }

  function onLoad(event) {
    var fr = new FileReader();
    fr.onload = () => classStates.set(JSON.parse(fr.result));
    fr.readAsText(event.target.files[0]);
  }
</script>

<svelte:head>
  <title>Settings</title>
</svelte:head>

<h1>Settings</h1>
<Button on:click={onSave} variant="unelevated" color="primary">
  <Label>Save</Label>
</Button>
<input on:change={onLoad} type="file" />
Class States:
{#each $classes as c}
  <p>{c.name}: {TaskState.toString($classStates[c.id])}</p>
{/each}

<a id="downloadAnchorElem" href="javascript:;" style="display:none">Download</a>
