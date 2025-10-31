import React from "react";
import Card from "../components/ui/Card";
import Hero from "../components/layout/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Welcome to the Liberation War Archive
        </h2>
        <p className="text-gray-700">
          Preserving the history and memories of Bangladesh's Liberation War
          through documents, interviews, and photographs.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card>Featured Document</Card>
        <Card>Featured Interview</Card>
        <Card>Featured Photograph</Card>
      </section>
    </div>
  );
};

export default Home;
