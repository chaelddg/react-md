import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

import { isPropEnabled } from '../utils/PropUtils';

export default class CardActions extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    stacked: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    stacked: false,
  }

  render() {
    const { className, children, ...props } = this.props;
    return (
      <section {...props} className={classnames('md-card-actions', className, { 'md-card-actions-stacked': isPropEnabled(props, 'stacked') })}>
        {children}
      </section>
    );
  }
}