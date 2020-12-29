/**
 * Copyright 2020 Gravitational, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { map } from 'lodash';
import api from 'teleport/services/api';
import cfg from 'teleport/config';
import makeApp from './makeApps';

const service = {
  fetchApps(clusterId: string) {
    return api
      .get(cfg.getApplicationsUrl(clusterId))
      .then(json => map(json.items, makeApp));
  },

  createAppSession(params: CreateAppSessionParams) {
    const { fqdn, clusterId = '', publicAddr = '' } = params;
    return api
      .post(cfg.api.aapSession, {
        fqdn,
        cluster_name: clusterId,
        public_addr: publicAddr,
      })
      .then(json => ({
        fqdn: json.fqdn as string,
        value: json.value as string,
      }));
  },
};

export default service;

type CreateAppSessionParams = {
  fqdn: string;
  clusterId?: string;
  publicAddr?: string;
};