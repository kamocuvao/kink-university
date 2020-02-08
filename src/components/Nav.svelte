<script>
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

  let drawer;
  let drawerOpen = false;
  let active = "Home";

  function setActive(value) {
    active = value;
    drawerOpen = false;
  }
</script>

<Drawer variant="modal" bind:this={drawer} bind:open={drawerOpen}>
  <Header>
    <DrawerTitle>Kink University</DrawerTitle>
    <!--<Subtitle>It's the best fake mail app drawer.</Subtitle>-->
  </Header>
  <Content>
    <List>
      <Item
        href="."
        on:click={() => setActive('Home')}
        activated={active === 'Home'}>
        <Graphic class="material-icons" aria-hidden="true">home</Graphic>
        <Text>Home</Text>
      </Item>
      <Item
        href="majors"
        on:click={() => setActive('Majors')}
        activated={active === 'Majors'}>
        <Graphic class="material-icons" aria-hidden="true">star</Graphic>
        <Text>Majors</Text>
      </Item>
      <Item
        href="classes"
        on:click={() => setActive('Classes')}
        activated={active === 'Classes'}>
        <Graphic class="material-icons" aria-hidden="true">school</Graphic>
        <Text>Classes</Text>
      </Item>
      <Item
        href="clubs-partners"
        on:click={() => setActive('Clubs/Partners')}
        activated={active === 'Clubs/Partners'}>
        <Graphic class="material-icons" aria-hidden="true">people</Graphic>
        <Text>Clubs/Partners</Text>
      </Item>
      <Item
        href="punishments"
        on:click={() => setActive('Punishments')}
        activated={active === 'Punishments'}>
        <Graphic class="material-icons" aria-hidden="true">sports</Graphic>
        <Text>Punishments</Text>
      </Item>
      <Item
        href="schedule"
        on:click={() => setActive('Schedule')}
        activated={active === 'Schedule'}>
        <Graphic class="material-icons" aria-hidden="true">schedule</Graphic>
        <Text>Schedule</Text>
      </Item>

      <Separator nav />
      <Subheader component={H6}>Help</Subheader>
      <Item
        href="help"
        on:click={() => setActive('Help/Rules')}
        activated={active === 'Help/Rules'}>
        <Graphic class="material-icons" aria-hidden="true">help</Graphic>
        <Text>Help/Rules</Text>
      </Item>
      <Item
        href="settings"
        on:click={() => setActive('Settings')}
        activated={active === 'Settings'}>
        <Graphic class="material-icons" aria-hidden="true">settings</Graphic>
        <Text>Settings</Text>
      </Item>
    </List>
  </Content>
</Drawer>
<Scrim />

<TopAppBar variant="static" color="primary">
  <Row>
    <Section>
      <IconButton
        class="material-icons"
        on:click={() => (drawerOpen = !drawerOpen)}>
        menu
      </IconButton>
      <Title>Kink University</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download">
        file_download
      </IconButton>
      <IconButton class="material-icons" aria-label="Print this page">
        print
      </IconButton>
      <IconButton class="material-icons" aria-label="Bookmark this page">
        bookmark
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
