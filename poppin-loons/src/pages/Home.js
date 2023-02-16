import React from 'react';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header title = "Home page"/>
      <p>
       This is my home Page, click the about button to read learn about me. Hit contact to get my contact information, and blog to see my daily posts!
      </p>
    </div>
  );
}