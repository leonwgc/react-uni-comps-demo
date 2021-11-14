import React, { useEffect } from 'react';
import { Spinner, Space } from 'react-uni-comps';
import { CSSTransition, Transition, TransitionGroup } from 'react-uni-comps/transition';

export default function App() {
  return (
    <div className="app">
      <Space wrap>
        <Spinner></Spinner>
        <Spinner size={32}></Spinner>
        <Spinner color="red"></Spinner>
        <Spinner color="red" size={48}></Spinner>
        <Spinner color="#004bcc"></Spinner>
        <Spinner color="#004bcc" size={48}></Spinner>
        <TransitionGroup>
          <CSSTransition>
            <Spinner></Spinner>
          </CSSTransition>
          <Transition>
            <Spinner></Spinner>
          </Transition>
        </TransitionGroup>
      </Space>
    </div>
  );
}
