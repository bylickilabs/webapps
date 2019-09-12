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

export default function makeLogins(json) {
  json = json || [];
  return sortLogins(json);
}

// sort logins by making 'root' as the first in the list
const sortLogins = logins => {
  const noRoot = logins.sort().filter(l => l !== 'root');
  if (noRoot.length === logins.length) {
    return logins;
  }

  noRoot.unshift('root');
  return noRoot;
};