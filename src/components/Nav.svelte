<script>
  import TopAppBar from "@smui/top-app-bar";
  import { Row } from "@smui/top-app-bar";
  import { Section } from "@smui/top-app-bar";
  import { Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
</script>

<TopAppBar variant="static" color="primary">
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
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

<nav>
  <ul>
    <li>
      <a href=".">Home</a>
    </li>
    <li>
      <a href="majors">Majors</a>
    </li>
    <li>
      <a href="classes">Classes</a>
    </li>
    <li>
      <a href="clubs-partners">Clubs/Partners</a>
    </li>
    <li>
      <a href="punishments">Punishments</a>
    </li>
    <li>
      <a href="schedule">Schedule</a>
    </li>
    <li>
      <a href="help">Help/Rules</a>
    </li>
    <li>
      <a href="settings">Settings</a>
    </li>
  </ul>
</nav>
