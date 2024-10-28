import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client';
// import Loading from './helper/component/Loading'; // use react-spinners for loader and match with ncameo loader type.
import HelloNcameo from './screens/helloncameo';

NCameo.prototype.form = function (param, container) {
  const root = createRoot(container);
  root.render(<HelloNcameo token={param.token} control={param.control ? param.control : {}} data={param.data} formid={param.formid} />);
}
NCameo.prototype.unmountComponent = function (container) {
  const root = createRoot(container);
  root.unmount();
}

window.NCameoVizippPlugin = NCameo; // please change the plugin name (e.g. NCameoVizippPlugin) if you have multiple plugin's
function NCameo() {
};
