<script>
  import Button from "sveltestrap/src/Button.svelte";

  import Col from "sveltestrap/src/Col.svelte";
  import Container from "sveltestrap/src/Container.svelte";
  import Row from "sveltestrap/src/Row.svelte";

  import Collapse from "sveltestrap/src/Collapse.svelte";
  import Card from "sveltestrap/src/Card.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardTitle from "sveltestrap/src/CardTitle.svelte";
  import CardSubtitle from "sveltestrap/src/CardSubtitle.svelte";
  import CardText from "sveltestrap/src/CardText.svelte";

  let isOpen = true;
</script>

<style>
  .imagebutton {
    width: 300px;
    height: 400px;
    background-color: darkgray;
  }
</style>

<svelte:head>
  <title>Classes</title>
</svelte:head>

<Container>
  <Row>
    <Col>
      <h1>Classes</h1>
    </Col>
  </Row>
  <Row>
    <Col>
      <Card class="mb-3">
        <CardHeader>
          <CardTitle>
            <a href="javascript:;" on:click={() => (isOpen = !isOpen)}>
              Beginner classes
            </a>
          </CardTitle>
        </CardHeader>
        <Collapse {isOpen}>
          <CardBody>
            <CardSubtitle>
              Beginner classes give 1 point for attendance and 3 points for
              passing the exam.
            </CardSubtitle>
            <Row>
              <Col>
                <div class="imagebutton">
                  <Button block>Fluids 101</Button>
                </div>
              </Col>
              <Col>
                <div class="imagebutton">
                  <Button block>Anal 102</Button>
                </div>
              </Col>
              <Col>
                <div class="imagebutton">
                  <Button block>Chastity 103</Button>
                </div>
              </Col>
              <Col>
                <div class="imagebutton">
                  <Button block>Femininity 104</Button>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  </Row>
</Container>
