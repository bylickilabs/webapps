/*
Copyright 2021 Gravitational, Inc.

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
import styled from 'styled-components';
import useDesktopSession, { State } from './useDesktopSession';

export default function Container() {
  const state = useDesktopSession();
  return <DesktopSession {...state} />;
}

export function DesktopSession(props: State) {
  const { attempt, setAttempt, tdpClientRef, tdpClientInitialized } = props;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    resizeCanvasToDisplaySize(canvasRef.current);
  }, []);

  // Waits for the state hook to initialize the TdpClient.
  // Once the client is initialized, calls for the client to connect to the
  // server and passes in the canvas for the client to render to.
  React.useEffect(() => {
    setAttempt({ status: 'processing' });
    const tdpClient = tdpClientRef.current;
    if (tdpClientInitialized) {
      try {
        tdpClient.connect(canvasRef.current);
        setAttempt({ status: 'success' });
      } catch (err) {
        setAttempt({ status: 'failed', statusText: err });
      }
    }
  }, [tdpClientInitialized]);

  // Canvas has two size attributes: the dimension of the pixels in the canvas (canvas.width)
  // and the display size of the html element (canvas.clientWidth). resizeCanvasToDisplaySize
  // ensures the two remain equal.
  function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // If it's resolution does not match change it
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  }

  return (
    <StyledDesktopSession>
      <canvas ref={canvasRef} />
    </StyledDesktopSession>
  );
}

const StyledDesktopSession = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
`;