import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Layout from '../components/MyLayout';
import ThreadCell from '../components/ThreadCell';
import ThreadRow from '../components/ThreadRow';

const hThreadContainerStyle = {
  float:"left",
}

export default class extends Component {

  constructor(props){
    super(props);
  }

  render () {
    console.log("rendering") //todo: why do we see this log message on both server and console when doing SSR?
    //todo: responsive text area for code
    return (
      <Layout>
        <div style={hThreadContainerStyle}>
          <ThreadRow hColor="hsl(0, 90%, 60%)" vColor="hsl(0, 0%, 30%)" vOffset={3} numColumns={4} cellHeight={1} cellWidth={1} />
          <ThreadRow hColor="hsl(0, 90%, 60%)" vColor="hsl(0, 0%, 30%)" vOffset={2} numColumns={4} cellHeight={1} cellWidth={1} />
          <ThreadRow hColor="hsl(0, 90%, 60%)" vColor="hsl(0, 0%, 30%)" vOffset={1} numColumns={4} cellHeight={1} cellWidth={1} />
          <ThreadRow hColor="hsl(0, 90%, 60%)" vColor="hsl(0, 0%, 30%)" vOffset={0} numColumns={4} cellHeight={1} cellWidth={1} />

        </div>
      </Layout>
    )
  }
}