import React, { Fragment } from 'react'
import {
  Container,
  Icon,
  Menu
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Fragment>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={NavLink} exact to="/">
          <Icon size='large' name='qq' style={{ marginRight: '1.5em' }} />
          Enquiry Manager for old mate
        </Menu.Item>
      </Container>
    </Menu>
  </Fragment>
)

export default NavBar
