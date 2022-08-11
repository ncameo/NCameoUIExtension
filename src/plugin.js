import React, { Suspense } from 'react'
import ReactDOM, { render } from 'react-dom';
import Loading from './helper/component/Loading';
import ErrorBoundary from './helper/component/ErrorBoundary';
import HelloNcameo from './screens/helloncameo';

NCameo.prototype.form = function (param, container) {
  render(
    <ErrorBoundary>
      <Suspense fallback={<Loading enable={true} />}>
        <HelloNcameo 
          token={param.token}
          data={param.data}
        />
      </Suspense></ErrorBoundary>, container);

}
NCameo.prototype.unmountComponent = function (container) {
  ReactDOM.unmountComponentAtNode(container);
}

window.NCameo = NCameo;
function NCameo() {
};
