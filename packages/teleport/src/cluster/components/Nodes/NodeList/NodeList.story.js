/*
Copyright 2019 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { storiesOf } from '@storybook/react';
import NodeList from './NodeList';

storiesOf('Teleport/Nodes', module).add('NodeList', () => {
  return <ListNodeStory />;
});

class ListNodeStory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={createMemoryHistory()}>
        <NodeList nodes={nodes} pageSize={3} />
      </Router>
    );
  }
}

const nodes = [
  {
    tunnel: false,
    id: '104',
    clusterId: 'one',
    hostname: 'fujedu',
    addr: '172.10.1.20:3022',
    tags: [
      { name: 'cluster', value: 'one' },
      { name: 'kernel', value: '4.15.0-51-generic' },
    ],
  },
  {
    tunnel: false,
    id: '170',
    clusterId: 'one',
    hostname: 'facuzguv',
    addr: '172.10.1.42:3022',
    tags: [
      { name: 'cluster', value: 'one' },
      { name: 'kernel', value: '4.15.0-51-generic' },
    ],
  },
  {
    tunnel: true,
    id: '192',
    clusterId: 'one',
    hostname: 'duzsevkig',
    addr: '172.10.1.156:3022',
    tags: [
      { name: 'cluster', value: 'one' },
      { name: 'kernel', value: '4.15.0-51-generic' },
    ],
  },
  {
    tunnel: true,
    id: '64',
    clusterId: 'one',
    hostname: 'kuhinur',
    addr: '172.10.1.145:3022',
    tags: [
      { name: 'cluster', value: 'one' },
      { name: 'kernel', value: '4.15.0-51-generic' },
    ],
  },
  {
    tunnel: false,
    id: '81',
    clusterId: 'one',
    hostname: 'zebpecda',
    addr: '172.10.1.24:3022',
    tags: [
      { name: 'cluster', value: 'one' },
      { name: 'kernel', value: '4.15.0-51-generic' },
      { name: 'lortavma', value: 'one' },
      { name: 'lenisret', value: '4.15.0-51-generic' },
      { name: 'lofdevod', value: 'one' },
      { name: 'llhurlaz', value: '4.15.0-51-generic' },
    ],
  },
];