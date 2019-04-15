// @flow
import * as React from 'react'

function PrivateRoute<Config: { }> (
  Component: React.AbstractComponent<Config>
): React.AbstractComponent < Config > {
  return Component;
}
