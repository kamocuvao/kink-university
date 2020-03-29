<script>
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title as DrawerTitle,
    Subtitle,
    Scrim
  } from "@smui/drawer";
  import H6 from "@smui/common/H6.svelte";

  let mainContent;
  let drawer;
  let drawerOpen = false;
  let active = "Home";
  let miniWindow = false;

  const { page } = stores();

  function pickSection(section) {
    mainContent.scrollTop = 0;
    drawerOpen = false;

    // Svelte/Sapper is not updated the components correctly, so I need this.
    sections
      .concat(helpSections)
      .forEach(section => section.component.$set({ activated: false }));
    section.component.$set({ activated: true });
  }

  const sections = [
    {
      name: "Home",
      route: "/",
      icon: "home",
      disabled: false
    },
    {
      name: "Majors",
      route: "/majors",
      icon: "star",
      disabled: true
    },
    {
      name: "Classes",
      route: "/classes",
      icon: "school",
      disabled: false
    },
    {
      name: "Clubs/Partners",
      route: "/clubs-partners",
      icon: "people",
      disabled: true
    },
    {
      name: "Punishments",
      route: "/punishments",
      icon: "sports",
      disabled: true
    },
    {
      name: "Schedule",
      route: "/schedule",
      icon: "schedule",
      disabled: true
    }
  ];

  const helpSections = [
    {
      name: "Help/Rules",
      route: "/help",
      icon: "help",
      disabled: false
    },
    {
      name: "Settings",
      route: "/settings",
      icon: "settings",
      disabled: false
    }
  ];

  onMount(setMiniWindow);

  function setMiniWindow() {
    miniWindow = window.innerWidth < 720;
  }
</script>

<style>
  .drawer-container {
    display: grid;
    grid-template-columns: min-content auto;
    height: 100%;
  }

  .demo-main-content {
    height: 100%;
  }
</style>

<svelte:window on:resize={setMiniWindow} />

<TopAppBar variant="static" color="primary">
  <Row>
    <Section>
      {#if miniWindow}
        <IconButton
          class="material-icons"
          on:click={() => (drawerOpen = !drawerOpen)}>
          menu
        </IconButton>
      {/if}
      <Title>Kink University</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton
        class="material-icons"
        aria-label="Download"
        href="settings"
        on:click={() => pickSection(helpSections[1])}>
        file_download
      </IconButton>
      <IconButton class="material-icons" aria-label="Bookmark this page">
        bookmark
      </IconButton>
    </Section>
  </Row>
</TopAppBar>

<div class="drawer-container">
  <Drawer
    class="demo-drawer"
    variant={miniWindow ? 'modal' : null}
    bind:this={drawer}
    bind:open={drawerOpen}>
    <Content>
      <List>
        {#each sections as section (section.name)}
          <Item
            bind:this={section.component}
            href={'route' in section ? section.route : section.shortcut}
            on:click={() => pickSection(section)}
            activated={'route' in section && section.route === $page.path}
            disabled={section.disabled}>
            <Graphic class="material-icons" aria-hidden="true">
              {section.icon}
            </Graphic>
            <Text>
              {#if section.disabled}
                <span style="color:grey">{section.name}</span>
              {:else}{section.name}{/if}
            </Text>
          </Item>
        {/each}

        <Separator nav />
        <Subheader component={H6}>Help</Subheader>
        {#each helpSections as section (section.name)}
          <Item
            bind:this={section.component}
            href={'route' in section ? section.route : section.shortcut}
            on:click={() => pickSection(section)}
            activated={'route' in section && section.route === $page.path}
            disabled={section.disabled}>
            <Graphic class="material-icons" aria-hidden="true">
              {section.icon}
            </Graphic>
            <Text>
              {#if section.disabled}
                <span style="color:grey">{section.name}</span>
              {:else}{section.name}{/if}
            </Text>
          </Item>
        {/each}

      </List>
    </Content>
  </Drawer>

  {#if miniWindow}
    <!--This is so that the css grid min.content on a small window works-->
    <div />

    <Scrim />
  {/if}

  <AppContent class="demo-app-content">
    <main class="demo-main-content" bind:this={mainContent}>
      <slot />
    </main>
  </AppContent>

</div>
