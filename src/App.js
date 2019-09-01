import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import {Grid,List , Dimmer,Placeholder,Segment,Loader,Image ,Divider,Header,Icon,Search,Button } from "semantic-ui-react"
class App extends Component {
  render() {
    return (
  <div>
  <br />
  <Grid container columns={1}>
    <Grid.Column>
    <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>
      <Grid.Row verticalAlign='middle'>
       <Grid.Column>
         <Header icon>
          <Icon name='search' />
            cari document
          </Header>

          <Search placeholder='Search document...' />
         </Grid.Column>

         <Grid.Column>
           <Header icon>
              <Icon name='pdf file outline' />
              tambah document baru
           </Header>
           <Button primary>create document</Button>
          </Grid.Column>
         </Grid.Row>
      </Grid>
    </Segment>
    </Grid.Column>
    </Grid>


    <Grid container columns={1}>
     <Grid.Column>
        <Segment>


            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
       </Segment>
       </Grid.Column>
       </Grid>

       <Grid container columns={3} stackable>
         <Grid.Column>
           <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>

                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />

        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
    <Grid.Column>
    <List>
      <h3>website terkait</h3>
       <List.Item icon='linkify' content={<a href='https://www.google.com/'>geogle</a>} />
       <List.Item icon='linkify' content={<a href='http://www.facebook.com'>facebook</a>} />
       <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui</a>} />
       <List.Item icon='linkify' content={<a href='http://www.react.com'>react</a>} />
    </List>
    </Grid.Column>

   </Grid>

</div>
    );
  }
}

export default App;
