import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World. (Classic)</h1>
    <p>Welcome to my website, I'm Yash Bajaj.</p>
    <p>Now go do shit.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
