/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Editor from './pages/Editor';
import Profile from './pages/Profile';
import Pricing from './pages/Pricing';
import Notifications from './pages/Notifications';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

