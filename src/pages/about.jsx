import React from 'react';
import PDF from 'react-pdf-js-infinite';

import resume from '../statics/resume.pdf';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <PDF
      file={resume}
    />
  </Layout>
);
