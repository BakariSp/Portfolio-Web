import React from 'react';
import storyContent from './text.json';

const OntologicalWorld = () => {
  // Split the content into chapters
  const chapters = Object.entries(storyContent).map(([title, content]) => ({
    title,
    content: content as string
  }));

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 pb-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">A Way Out of Ontological World</h1>
        <p className="text-xl text-gray-600">
          An exploration of consciousness, identity, and technological transcendence
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
        <p className="text-lg leading-relaxed mb-6">
          This narrative explores themes of self-identity, consciousness, and technological transcendence.
          The story follows a protagonist involved in a mind swap experiment facilitated by a company's
          cutting-edge chip technology, leading to unforeseen consequences including a murder-suicide,
          loss of personal identity, and eventual absorption into a collective consciousness.
        </p>
        <p className="text-lg leading-relaxed">
          Through its narrative, the story delves into philosophical questions about the essence of self,
          the morality of technological advancement, and the possibility of escaping the limitations of
          physical existence.
        </p>
      </section>

      <div className="divide-y divide-gray-200">
        {chapters.map((chapter, index) => (
          <section key={index} className="py-10">
            <h2 className="text-3xl font-bold mb-6">{chapter.title}</h2>
            <div className="prose prose-lg max-w-none">
              {chapter.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-600">
          © Linghang Cai | <a href="https://linghangdesign.com" className="underline">linghangdesign.com</a>
        </p>
      </footer>
    </div>
  );
};

export default OntologicalWorld;
