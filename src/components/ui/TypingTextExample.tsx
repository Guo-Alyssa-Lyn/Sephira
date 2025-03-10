import TypingText from './TypingText';

const TypingTextExample = () => {
  return (
    <div className="space-y-4">
      <TypingText
        text="Welcome to Nemesis - Your Ultimate AI Assistant"
        className="text-4xl font-bold text-white"
        speed={50}
        wordDelay={800}
      />
      <TypingText
        text="Experience the future of AI-powered interactions"
        className="text-xl text-gray-300"
        speed={40}
        wordDelay={600}
      />
      <TypingText
        text="Built with Next.js, React, and Tailwind CSS"
        className="text-lg text-gray-400"
        speed={30}
        wordDelay={400}
      />
    </div>
  );
};

export default TypingTextExample; 