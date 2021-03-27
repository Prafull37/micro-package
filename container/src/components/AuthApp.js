import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default (props) => {
  const ref = useRef(null);
  const history = useHistory();
  console.log("props",props)
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn:props.signIn
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
