<script>
  import Collapse from "sveltestrap/src/Collapse.svelte";
  import Navbar from "sveltestrap/src/Navbar.svelte";
  import NavbarBrand from "sveltestrap/src/NavbarBrand.svelte";
  import NavbarToggler from "sveltestrap/src/NavbarToggler.svelte";
  import Nav from "sveltestrap/src/Nav.svelte";
  import NavItem from "sveltestrap/src/NavItem.svelte";
  import NavLink from "sveltestrap/src/NavLink.svelte";
  import UncontrolledDropdown from "sveltestrap/src/UncontrolledDropdown.svelte";
  import DropdownToggle from "sveltestrap/src/DropdownToggle.svelte";
  import DropdownMenu from "sveltestrap/src/DropdownMenu.svelte";
  import DropdownItem from "sveltestrap/src/DropdownItem.svelte";

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/">Kink University</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ml-auto" navbar>
      <NavItem>
        <NavLink href=".">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="majors">Majors</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="classes">Classes</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="clubs-partners">Clubs/Partners</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="punishments">Punishments</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="schedule">Schedule</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="help">Help/Rules</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="community">Community</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="settings">Settings</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
