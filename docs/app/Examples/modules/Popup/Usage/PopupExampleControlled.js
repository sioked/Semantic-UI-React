import React from 'react'
import { Button, Grid, Header, Popup } from 'semantic-ui-react'

const timeoutLength = 2500

class PopupExampleControlled extends React.Component {
  state = { isOpen: false }

  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Popup
            trigger={<Button content='Open controlled popup' />}
            content={`This message will self-destruct in ${timeoutLength / 1000} seconds!`}
            on='click'
            open={this.state.isOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            positioning='top right'
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header>State</Header>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </Grid.Column>
      </Grid>
    )
  }
}

export default PopupExampleControlled
