import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Menulist from './Menu';

class Home extends React.Component {
  state = { menus: [] }

  componentDidMount() {
    fetch('/api/menus')
      .then( res => res.json() )
      .then( menus => this.setState({ menus }) )
  }

    render() {
          return(
              <div>
                  <Menulist allmenus={this.state.menus} />
              </div>
          )
        }
    }


export default Home
