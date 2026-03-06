export interface UIStyleComponents {
  wrapper: string;
  card: string;
  title: string;
  text: string;
  button: string;
  input: string;
}

export interface UIStyle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  characteristics: string[];
  useCases: string[];
  whyItAppeared: string;
  typicalElements: string[];
  problems: string[];
  targetAudience: string;
  coreDesignPrinciples: string[];
  accessibilityTradeoffs: string;
  performanceCost: 'Low' | 'Medium' | 'High';
  accessibilityRating: 'Poor' | 'Fair' | 'Good' | 'Excellent';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  bgClass: string;
  fonts: {
    heading: string;
    body: string;
  };
  components: UIStyleComponents;
  cssSnippet: string;
  tailwindSnippet: string;
}

export const uiStyles: UIStyle[] = [
  {
    id: 'flat',
    name: 'Flat Design',
    tagline: 'Minimalist, 2D, and brightly colored.',
    description: 'A minimalist UI design genre that emphasizes 2D elements and bright colors. It avoids any stylistic elements that give the illusion of three dimensions.',
    characteristics: [
      'No depth or 3D effects',
      'Bright, high-contrast colors',
      'Crisp edges and simple typography',
      'Minimalist approach'
    ],
    useCases: [
      'Information-heavy dashboards',
      'Simple mobile applications',
      'Corporate websites focusing on clarity'
    ],
    whyItAppeared: 'Emerged as a reaction against skeuomorphism. It aimed to improve load times, responsiveness, and clarity on digital screens.',
    targetAudience: 'General audience, users who appreciate simplicity and speed.',
    coreDesignPrinciples: ['Simplicity', 'Clarity', 'Authenticity', 'Focus on content'],
    typicalElements: [
      'Solid, bright colors',
      'Simple typography',
      'Ghost buttons',
      'Minimalist icons without shadows'
    ],
    problems: [
      'Lack of signifiers (hard to tell what is clickable)',
      'Can feel too generic or boring'
    ],
    accessibilityTradeoffs: 'Generally excellent due to high contrast and lack of distracting elements, but requires clear visual signifiers for interactive elements.',
    performanceCost: 'Low',
    accessibilityRating: 'Excellent',
    difficulty: 'Beginner',
    tags: ['mobile-safe', 'fast-loading', 'minimalist'],
    bgClass: 'bg-slate-100',
    fonts: {
      heading: 'font-inter font-bold tracking-tight',
      body: 'font-inter'
    },
    components: {
      wrapper: 'bg-slate-100 p-8 flex flex-col items-center justify-center min-h-[400px]',
      card: 'bg-white p-6 w-full max-w-sm border-2 border-slate-900',
      title: 'font-inter text-2xl font-bold text-slate-900 mb-2',
      text: 'font-inter text-slate-700 mb-6',
      button: 'font-inter w-full bg-blue-600 text-white font-bold py-3 px-4 hover:bg-blue-700 transition-colors',
      input: 'font-inter w-full bg-slate-100 border-2 border-slate-900 p-3 mb-4 focus:outline-none focus:border-blue-600 focus:ring-0 text-slate-900 placeholder-slate-500'
    },
    cssSnippet: `.flat-card { background: #fff; border: 2px solid #0f172a; padding: 1.5rem; }`,
    tailwindSnippet: `<div class="bg-white border-2 border-slate-900 p-6 w-full max-w-sm">\n  <h3 class="font-inter text-2xl font-bold text-slate-900 mb-2">Flat Design</h3>\n  <p class="font-inter text-slate-700 mb-6">Minimalist, 2D, and brightly colored.</p>\n  <input type="text" placeholder="Enter email" class="font-inter w-full bg-slate-100 border-2 border-slate-900 p-3 mb-4 focus:outline-none focus:border-blue-600 focus:ring-0 text-slate-900 placeholder-slate-500" />\n  <button class="font-inter w-full bg-blue-600 text-white font-bold py-3 px-4 hover:bg-blue-700 transition-colors">Subscribe</button>\n</div>`
  },
  {
    id: 'material',
    name: 'Material Design',
    tagline: 'Paper and ink with realistic shadows.',
    description: 'Developed by Google, Material Design uses grid-based layouts, responsive animations, padding, and depth effects such as lighting and shadows.',
    characteristics: [
      'Z-axis depth and realistic shadows',
      'Bold, graphic, and intentional typography',
      'Meaningful motion and responsive interaction'
    ],
    useCases: [
      'Android applications',
      'Google ecosystem products',
      'Complex enterprise software'
    ],
    whyItAppeared: 'Created by Google to unify user experiences across their diverse product ecosystem using paper and ink as a metaphor.',
    targetAudience: 'Android users, enterprise software users, general web users.',
    coreDesignPrinciples: ['Material is the metaphor', 'Bold, graphic, intentional', 'Motion provides meaning'],
    typicalElements: [
      'Floating Action Buttons (FAB)',
      'Card layouts',
      'Ripple animations',
      'Z-axis shadows'
    ],
    problems: [
      "Can feel too 'Google-like' or rigid",
      'Heavy reliance on shadows can clutter the UI'
    ],
    accessibilityTradeoffs: 'Good accessibility with clear guidelines on contrast and touch targets, though overlapping shadows can sometimes confuse visual hierarchy.',
    performanceCost: 'Medium',
    accessibilityRating: 'Good',
    difficulty: 'Intermediate',
    tags: ['enterprise-ready', 'structured', 'shadow-heavy'],
    bgClass: 'bg-gray-50',
    fonts: {
      heading: 'font-roboto font-medium tracking-tight',
      body: 'font-roboto'
    },
    components: {
      wrapper: 'bg-gray-50 p-8 flex flex-col items-center justify-center min-h-[400px]',
      card: 'bg-white p-6 w-full max-w-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300',
      title: 'font-roboto text-xl font-medium text-gray-900 mb-2 tracking-tight',
      text: 'font-roboto text-gray-600 mb-6 text-sm',
      button: 'font-roboto w-full bg-indigo-600 text-white font-medium py-2.5 px-4 rounded shadow hover:shadow-md hover:bg-indigo-700 transition-all uppercase tracking-wider text-sm',
      input: 'font-roboto w-full bg-gray-50 border-b-2 border-gray-300 p-2.5 mb-4 focus:outline-none focus:border-indigo-600 focus:bg-gray-100 transition-colors text-gray-900 rounded-t-md'
    },
    cssSnippet: `.material-card { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border-radius: 0.5rem; font-family: 'Roboto', sans-serif; }`,
    tailwindSnippet: `<div class="bg-white p-6 w-full max-w-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">\n  <h3 class="font-roboto text-xl font-medium text-gray-900 mb-2 tracking-tight">Material Design</h3>\n  <p class="font-roboto text-gray-600 mb-6 text-sm">Paper and ink with realistic shadows.</p>\n  <input type="text" placeholder="Enter email" class="font-roboto w-full bg-gray-50 border-b-2 border-gray-300 p-2.5 mb-4 focus:outline-none focus:border-indigo-600 focus:bg-gray-100 transition-colors text-gray-900 rounded-t-md" />\n  <button class="font-roboto w-full bg-indigo-600 text-white font-medium py-2.5 px-4 rounded shadow hover:shadow-md hover:bg-indigo-700 transition-all uppercase tracking-wider text-sm">Subscribe</button>\n</div>`
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    tagline: 'Frosted glass, vivid backgrounds, and depth.',
    description: 'A style characterized by a frosted glass effect. It uses background blur, semi-transparent elements, and vivid backgrounds to create a sense of verticality and depth.',
    characteristics: [
      'Translucency (frosted glass effect)',
      'Vivid or colorful backgrounds',
      'Light, subtle borders to simulate glass edges'
    ],
    useCases: [
      'Modern macOS and iOS interfaces',
      'Fintech app dashboards',
      'Landing pages for creative tools'
    ],
    whyItAppeared: 'Gained popularity with macOS Big Sur and Windows 11 as screens became higher resolution and devices more powerful.',
    targetAudience: 'Design-conscious users, modern tech brands, creative portfolios.',
    coreDesignPrinciples: ['Transparency', 'Multi-layered approach', 'Vivid backgrounds', 'Subtle borders'],
    typicalElements: [
      'Frosted glass panels (backdrop-filter)',
      'Vivid, colorful backgrounds',
      'Light borders'
    ],
    problems: [
      'Accessibility issues (poor contrast and legibility)',
      'Performance heavy due to background blur rendering'
    ],
    accessibilityTradeoffs: 'Can suffer from poor contrast if the background is too noisy or light. Requires careful text shadowing and opacity tuning.',
    performanceCost: 'High',
    accessibilityRating: 'Fair',
    difficulty: 'Advanced',
    tags: ['GPU-heavy', 'trendy', 'translucent'],
    bgClass: 'bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-500',
    fonts: {
      heading: 'font-jakarta font-light tracking-wide',
      body: 'font-jakarta font-light tracking-wide'
    },
    components: {
      wrapper: 'bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-500 p-8 flex flex-col items-center justify-center min-h-[400px]',
      card: 'bg-white/10 backdrop-blur-lg border border-white/20 p-6 w-full max-w-sm rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]',
      title: 'font-jakarta text-3xl font-light text-white mb-2 tracking-wide drop-shadow-sm',
      text: 'font-jakarta text-white/80 mb-6 font-light tracking-wide',
      button: 'font-jakarta w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-normal tracking-wider py-3 px-4 rounded-xl transition-all shadow-lg backdrop-blur-sm',
      input: 'font-jakarta font-light tracking-wide w-full bg-white/10 border border-white/20 p-3 mb-4 rounded-xl focus:outline-none focus:bg-white/20 focus:border-white/40 text-white placeholder-white/50 backdrop-blur-sm transition-all'
    },
    cssSnippet: `.glass-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.2); }`,
    tailwindSnippet: `<div class="bg-white/10 backdrop-blur-lg border border-white/20 p-6 w-full max-w-sm rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">\n  <h3 class="font-jakarta text-3xl font-light text-white mb-2 tracking-wide drop-shadow-sm">Glassmorphism</h3>\n  <p class="font-jakarta text-white/80 mb-6 font-light tracking-wide">Frosted glass, vivid backgrounds, and depth.</p>\n  <input type="text" placeholder="Enter email" class="font-jakarta font-light tracking-wide w-full bg-white/10 border border-white/20 p-3 mb-4 rounded-xl focus:outline-none focus:bg-white/20 focus:border-white/40 text-white placeholder-white/50 backdrop-blur-sm transition-all" />\n  <button class="font-jakarta w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-normal tracking-wider py-3 px-4 rounded-xl transition-all shadow-lg backdrop-blur-sm">Subscribe</button>\n</div>`
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    tagline: 'Soft, extruded plastic aesthetics.',
    description: 'Also known as Soft UI, Neumorphism combines flat design and skeuomorphism. Elements appear to be extruded from the background, created by using light and dark shadows.',
    characteristics: [
      'Low contrast, monochromatic color palettes',
      'Elements match the background color',
      'Use of inner and outer shadows (light and dark)'
    ],
    useCases: [
      'Music players and audio interfaces',
      'Smart home control panels',
      'Conceptual UI designs'
    ],
    whyItAppeared: "Emerged as a Dribbble trend, attempting to bring back a soft, tactile feel to interfaces without the heavy textures of classic skeuomorphism.",
    targetAudience: 'Dribbble enthusiasts, niche experimental apps, smart home controls.',
    coreDesignPrinciples: ['Softness', 'Extrusion', 'Low contrast', 'Monochromatic palettes'],
    typicalElements: [
      'Low-contrast elements matching the background',
      'Inner and outer shadows',
      'Extruded buttons'
    ],
    problems: [
      'Severe accessibility and contrast issues',
      'Takes up a lot of space (requires large padding for shadows)'
    ],
    accessibilityTradeoffs: 'Very poor accessibility out of the box due to extremely low contrast ratios between elements and backgrounds.',
    performanceCost: 'Medium',
    accessibilityRating: 'Poor',
    difficulty: 'Intermediate',
    tags: ['low-contrast', 'tactile', 'monochromatic'],
    bgClass: 'bg-[#e0e5ec]',
    fonts: {
      heading: 'font-dm-sans font-bold tracking-tight',
      body: 'font-dm-sans font-medium'
    },
    components: {
      wrapper: 'bg-[#e0e5ec] p-8 flex flex-col items-center justify-center min-h-[400px]',
      card: 'bg-[#e0e5ec] p-6 w-full max-w-sm rounded-3xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]',
      title: 'font-dm-sans text-2xl font-bold text-slate-700 mb-2',
      text: 'font-dm-sans text-slate-500 mb-6 font-medium',
      button: 'font-dm-sans w-full bg-[#e0e5ec] text-blue-500 font-bold py-3 px-4 rounded-xl shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] active:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-all',
      input: 'font-dm-sans font-medium w-full bg-[#e0e5ec] p-3 mb-4 rounded-xl shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] focus:outline-none text-slate-700 placeholder-slate-400 border-none'
    },
    cssSnippet: `.neumorphic-card { background: #e0e5ec; box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff; }`,
    tailwindSnippet: `<div class="bg-[#e0e5ec] p-6 w-full max-w-sm rounded-3xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">\n  <h3 class="font-dm-sans text-2xl font-bold text-slate-700 mb-2">Neumorphism</h3>\n  <p class="font-dm-sans text-slate-500 mb-6 font-medium">Soft, extruded plastic aesthetics.</p>\n  <input type="text" placeholder="Enter email" class="font-dm-sans font-medium w-full bg-[#e0e5ec] p-3 mb-4 rounded-xl shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] focus:outline-none text-slate-700 placeholder-slate-400 border-none" />\n  <button class="font-dm-sans w-full bg-[#e0e5ec] text-blue-500 font-bold py-3 px-4 rounded-xl shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] active:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-all">Subscribe</button>\n</div>`
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    tagline: 'Friendly, fluffy, and inflated 3D shapes.',
    description: 'A friendly, 3D-like style that resembles clay or playdough. It uses multiple inner and outer shadows to create a fluffy, inflated look with very rounded corners.',
    characteristics: [
      'Fluffy, inflated 3D appearance',
      'Two inner shadows (one light, one dark)',
      'Highly rounded corners (pill shapes)'
    ],
    useCases: [
      'Web3 and crypto applications',
      "Children's educational apps",
      'Gamified interfaces'
    ],
    whyItAppeared: 'Emerged as a playful, friendly alternative to the rigidness of flat design and the low contrast of neumorphism.',
    targetAudience: 'Web3 projects, educational apps, playful consumer brands.',
    coreDesignPrinciples: ['Tactile feel', 'Friendly and approachable', 'Depth through inner shadows', 'Vibrant colors'],
    typicalElements: [
      'Fluffy, inflated shapes',
      'Double inner shadows',
      'Pastel color palettes'
    ],
    problems: [
      'Can look too childish or informal for serious applications',
      'Requires careful shadow management to look right'
    ],
    accessibilityTradeoffs: 'Generally good if colors are chosen well. The distinct 3D shapes provide excellent affordance for interactive elements.',
    performanceCost: 'Medium',
    accessibilityRating: 'Good',
    difficulty: 'Intermediate',
    tags: ['playful', '3D', 'pastel'],
    bgClass: 'bg-[#f1f5f9]',
    fonts: {
      heading: 'font-quicksand font-bold',
      body: 'font-quicksand text-lg font-medium'
    },
    components: {
      wrapper: 'bg-[#f1f5f9] p-8 flex flex-col items-center justify-center min-h-[400px]',
      card: 'bg-white p-6 w-full max-w-sm rounded-[2rem] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff,inset_4px_4px_8px_rgba(255,255,255,0.8),inset_-4px_-4px_8px_rgba(0,0,0,0.05)]',
      title: 'font-quicksand text-3xl font-bold text-slate-800 mb-2',
      text: 'font-quicksand text-slate-600 mb-6 font-semibold text-lg',
      button: 'font-quicksand text-lg w-full bg-blue-400 text-white font-bold py-3 px-4 rounded-full shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff,inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.1)] hover:scale-105 hover:bg-blue-500 transition-all active:scale-95',
      input: 'font-quicksand font-semibold text-lg w-full bg-slate-50 p-3 mb-4 rounded-full shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-700 placeholder-slate-400 border-none px-6'
    },
    cssSnippet: `.clay-card { border-radius: 2rem; box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #fff, inset 4px 4px 8px rgba(255,255,255,0.8), inset -4px -4px 8px rgba(0,0,0,0.05); }`,
    tailwindSnippet: `<div class="bg-white p-6 w-full max-w-sm rounded-[2rem] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff,inset_4px_4px_8px_rgba(255,255,255,0.8),inset_-4px_-4px_8px_rgba(0,0,0,0.05)]">\n  <h3 class="font-quicksand text-3xl font-bold text-slate-800 mb-2">Claymorphism</h3>\n  <p class="font-quicksand text-slate-600 mb-6 font-semibold text-lg">Friendly, fluffy, and inflated 3D shapes.</p>\n  <input type="text" placeholder="Enter email" class="font-quicksand font-semibold text-lg w-full bg-slate-50 p-3 mb-4 rounded-full shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-700 placeholder-slate-400 border-none px-6" />\n  <button class="font-quicksand text-lg w-full bg-blue-400 text-white font-bold py-3 px-4 rounded-full shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff,inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.1)] hover:scale-105 hover:bg-blue-500 transition-all active:scale-95">Subscribe</button>\n</div>`
  },
  {
    id: 'fluent',
    name: 'Fluent Design',
    tagline: 'Microsoft\'s sensory, depth-aware design language.',
    description: 'Developed by Microsoft, it focuses on light, depth, motion, material, and scale to create a sensory and engaging experience.',
    characteristics: [
      'Acrylic material (background blur)',
      'Reveal highlight on hover',
      'Depth and motion',
      'Typography-driven'
    ],
    useCases: [
      'Windows applications',
      'Enterprise software',
      'Productivity tools'
    ],
    whyItAppeared: 'Developed by Microsoft to create a sensory, engaging experience across Windows and their ecosystem.',
    targetAudience: 'Windows users, enterprise applications, productivity tools.',
    coreDesignPrinciples: ['Light', 'Depth', 'Motion', 'Material', 'Scale'],
    typicalElements: [
      'Acrylic material (blur)',
      'Reveal highlight on hover',
      'Depth',
      'Motion'
    ],
    problems: [
      'Can feel heavy if overused',
      'Hover effects don\'t translate well to touch devices'
    ],
    accessibilityTradeoffs: 'Good. Microsoft provides strong guidelines, though the "Acrylic" blur shares some Glassmorphism performance issues.',
    performanceCost: 'Medium',
    accessibilityRating: 'Good',
    difficulty: 'Intermediate',
    tags: ['microsoft', 'acrylic', 'enterprise'],
    bgClass: 'bg-slate-100',
    fonts: {
      heading: 'font-segoe font-bold leading-tight',
      body: 'font-segoe font-normal leading-snug'
    },
    components: {
      wrapper: 'bg-slate-100 p-8 flex flex-col items-center justify-center min-h-[400px]',
      card: 'bg-white/70 backdrop-blur-md p-6 w-full max-w-sm rounded-lg shadow-sm border border-white/50',
      title: 'font-segoe text-xl font-bold text-slate-900 mb-1 leading-tight',
      text: 'font-segoe text-slate-600 mb-5 font-normal leading-snug',
      button: 'font-segoe w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors',
      input: 'font-segoe font-normal w-full bg-white/50 border-b-2 border-slate-300 p-2 mb-4 focus:outline-none focus:border-blue-600 transition-colors text-slate-900 placeholder-slate-500'
    },
    cssSnippet: `.fluent-card { background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.5); border-radius: 8px; }`,
    tailwindSnippet: `<div class="bg-white/70 backdrop-blur-md p-6 w-full max-w-sm rounded-lg shadow-sm border border-white/50">\n  <h3 class="font-segoe text-xl font-bold text-slate-900 mb-1 leading-tight">Fluent Design</h3>\n  <p class="font-segoe text-slate-600 mb-5 font-normal leading-snug">Sensory, depth-aware design language.</p>\n  <input type="text" placeholder="Enter email" class="font-segoe font-normal w-full bg-white/50 border-b-2 border-slate-300 p-2 mb-4 focus:outline-none focus:border-blue-600 transition-colors text-slate-900 placeholder-slate-500" />\n  <button class="font-segoe w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors">Subscribe</button>\n</div>`
  },
  {
    id: 'aurora',
    name: 'Aurora UI',
    tagline: 'Ethereal, glowing, and highly saturated.',
    description: 'A recent trend focusing on organic, flowing, and highly saturated gradients, often animated, resembling the Northern Lights.',
    characteristics: [
      'Mesh gradients',
      'Animated blobs',
      'Dark mode dominance',
      'Glowing text'
    ],
    useCases: [
      'AI tools',
      'Modern SaaS',
      'Creative agencies',
      'Crypto platforms'
    ],
    whyItAppeared: 'A recent trend focusing on organic, flowing, and highly saturated gradients, often animated.',
    targetAudience: 'AI tools, modern SaaS, creative agencies, crypto platforms.',
    coreDesignPrinciples: ['Fluidity', 'Vibrancy', 'Ethereal aesthetic', 'Organic motion'],
    typicalElements: [
      'Mesh gradients',
      'Animated blobs',
      'Dark mode dominance',
      'Glowing text'
    ],
    problems: [
      'High GPU usage for animations',
      'Can be distracting from content',
      'Hard to implement performantly'
    ],
    accessibilityTradeoffs: 'Fair. Moving backgrounds can trigger motion sensitivity. Text contrast over complex gradients can be tricky.',
    performanceCost: 'High',
    accessibilityRating: 'Fair',
    difficulty: 'Advanced',
    tags: ['gradients', 'animated', 'modern'],
    bgClass: 'bg-slate-900',
    fonts: {
      heading: 'font-outfit font-extralight tracking-tight',
      body: 'font-outfit font-light'
    },
    components: {
      wrapper: 'bg-slate-900 p-8 flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden',
      card: 'bg-white/10 backdrop-blur-xl p-6 w-full max-w-sm rounded-2xl shadow-2xl border border-white/20 relative z-10',
      title: 'font-outfit text-4xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-3 tracking-tight',
      text: 'font-outfit text-slate-200 mb-6 font-light text-lg',
      button: 'font-outfit w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium tracking-wide py-3 px-4 rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)]',
      input: 'font-outfit font-light w-full bg-white/5 border border-white/10 p-3 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-slate-400 transition-all'
    },
    cssSnippet: `.aurora-bg { background: linear-gradient(45deg, #ff00cc, #3333ff); filter: blur(50px); }`,
    tailwindSnippet: `<div class="bg-white/10 backdrop-blur-xl p-6 w-full max-w-sm rounded-2xl shadow-2xl border border-white/20 relative z-10">\n  <h3 class="font-outfit text-4xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-3 tracking-tight">Aurora UI</h3>\n  <p class="font-outfit text-slate-200 mb-6 font-light text-lg">Ethereal, glowing, and highly saturated.</p>\n  <input type="text" placeholder="Enter email" class="font-outfit font-light w-full bg-white/5 border border-white/10 p-3 mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-slate-400 transition-all" />\n  <button class="font-outfit w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium tracking-wide py-3 px-4 rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)]">Subscribe</button>\n</div>`
  },
  {
    id: 'bento',
    name: 'Bento Grid',
    tagline: 'Structured, compartmentalized, and highly scannable.',
    description: 'Inspired by Japanese bento boxes, this layout style organizes content into a strict, often asymmetrical grid of clearly defined cards or compartments.',
    characteristics: [
      'Strict grid-based layout',
      'Distinct compartments (cards) with uniform rounded corners',
      'High information density but highly scannable',
      'Often mixes different media types (text, charts, images) in adjacent cells'
    ],
    useCases: [
      'Product dashboards',
      'Portfolio websites',
      'Feature showcases on landing pages',
      'Apple ecosystem interfaces'
    ],
    whyItAppeared: 'Popularized by Apple (especially in iOS widgets and presentation slides), it solves the problem of displaying diverse types of information in a cohesive, easily digestible format on responsive screens.',
    targetAudience: 'Dashboard users, portfolio viewers, data-heavy application users.',
    coreDesignPrinciples: ['Organization', 'Hierarchy through size', 'Modularity', 'Clean separation'],
    typicalElements: [
      'Cards with uniform border-radius',
      'Subtle borders or background contrast to separate cells',
      'Masonry or strict CSS Grid layouts',
      'Edge-to-edge content within cells'
    ],
    problems: [
      'Can be difficult to make fully responsive without breaking the visual rhythm',
      'Requires careful content curation to fit specific cell sizes',
      'May feel overly constrained for long-form content'
    ],
    accessibilityTradeoffs: 'Excellent for cognitive accessibility as it chunks information logically. Visual accessibility depends on the contrast within the individual cells.',
    performanceCost: 'Low',
    accessibilityRating: 'Excellent',
    difficulty: 'Intermediate',
    tags: ['structured', 'dashboard-friendly', 'scannable'],
    bgClass: 'bg-zinc-100',
    fonts: {
      heading: 'font-instrument font-semibold tracking-tight',
      body: 'font-inter'
    },
    components: {
      wrapper: 'bg-zinc-100 p-8 flex flex-col items-center justify-center min-h-[400px]',
      card: 'bg-white p-6 w-full max-w-sm rounded-3xl shadow-sm border border-zinc-200/80',
      title: 'font-instrument text-2xl font-semibold text-zinc-900 mb-2 tracking-tight',
      text: 'font-inter text-zinc-500 mb-6 text-sm',
      button: 'font-inter w-full bg-zinc-900 text-white font-medium py-3 px-4 rounded-2xl hover:bg-zinc-800 transition-colors',
      input: 'font-inter w-full bg-zinc-100 border border-zinc-200 p-3 mb-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-zinc-900 placeholder-zinc-400'
    },
    cssSnippet: `.bento-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; } .bento-cell { background: #fff; border-radius: 1.5rem; padding: 1.5rem; }`,
    tailwindSnippet: `<div class="bg-white p-6 w-full max-w-sm rounded-3xl shadow-sm border border-zinc-200/80">\n  <h3 class="font-instrument text-2xl font-semibold text-zinc-900 mb-2 tracking-tight">Bento Grid</h3>\n  <p class="font-inter text-zinc-500 mb-6 text-sm">Structured, compartmentalized, and highly scannable.</p>\n  <input type="text" placeholder="Enter email" class="font-inter w-full bg-zinc-100 border border-zinc-200 p-3 mb-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-zinc-900 placeholder-zinc-400" />\n  <button class="font-inter w-full bg-zinc-900 text-white font-medium py-3 px-4 rounded-2xl hover:bg-zinc-800 transition-colors">Subscribe</button>\n</div>`
  },
  {
    id: 'neubrutalism',
    name: 'Neubrutalism',
    tagline: 'Raw, unpolished, and high-contrast.',
    description: 'A reaction against overly polished corporate design. It features harsh contrasts, stark typography, visible borders, and unapologetic use of raw colors and shapes.',
    characteristics: [
      'Stark, high-contrast color palettes',
      'Thick, dark borders and hard shadows',
      'Raw, high-impact typography (often monospace or heavy grotesques)',
      'Lack of gradients or soft shadows'
    ],
    useCases: [
      'Developer tools',
      'Avant-garde portfolios',
      'Indie hacking projects',
      'Youth-oriented brands'
    ],
    whyItAppeared: 'Emerged as a counter-culture movement against the "sameness" of corporate flat design and soft UI, embracing a more brutal, unrefined aesthetic.',
    targetAudience: 'Developers, designers, trend-setters, audiences looking for something different.',
    coreDesignPrinciples: ['Rawness', 'High contrast', 'Legibility over aesthetics', 'Structural honesty'],
    typicalElements: [
      'Hard, solid shadows (no blur)',
      'Thick black borders',
      'Monospace or heavy sans-serif fonts',
      'Web-safe colors'
    ],
    problems: [
      'Can be visually overwhelming',
      'May feel unpolished or "broken" to some users'
    ],
    accessibilityTradeoffs: 'High contrast makes it very legible, but the starkness and lack of conventional signifiers can be confusing for some users.',
    performanceCost: 'Low',
    accessibilityRating: 'Good',
    difficulty: 'Beginner',
    tags: ['high-contrast', 'raw', 'trendy'],
    bgClass: 'bg-[#f4f4f0]',
    fonts: {
      heading: 'font-space-grotesk font-black uppercase tracking-tight leading-none',
      body: 'font-space-mono font-bold leading-tight'
    },
    components: {
      wrapper: 'bg-[#f4f4f0] p-8 flex flex-col items-center justify-center min-h-[400px]',
      card: 'bg-[#ff90e8] p-6 w-full max-w-sm border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none',
      title: 'font-space-grotesk text-3xl font-black text-black mb-2 uppercase tracking-tight leading-none',
      text: 'font-space-mono text-black mb-6 font-bold text-sm leading-tight',
      button: 'font-space-grotesk uppercase tracking-widest w-full bg-[#ffc900] text-black font-black py-3 px-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all',
      input: 'font-space-mono w-full bg-white border-4 border-black p-3 mb-4 focus:outline-none focus:bg-[#e0e0e0] text-black placeholder-black/50 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
    },
    cssSnippet: `.neubrutalism-card { background: #ff90e8; border: 4px solid #000; box-shadow: 8px 8px 0px #000; }`,
    tailwindSnippet: `<div class="bg-[#ff90e8] p-6 w-full max-w-sm border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none">\n  <h3 class="font-space-grotesk text-3xl font-black text-black mb-2 uppercase tracking-tight leading-none">Neubrutalism</h3>\n  <p class="font-space-mono text-black mb-6 font-bold text-sm leading-tight">Raw, unpolished, and high-contrast.</p>\n  <input type="text" placeholder="Enter email" class="font-space-mono w-full bg-white border-4 border-black p-3 mb-4 focus:outline-none focus:bg-[#e0e0e0] text-black placeholder-black/50 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />\n  <button class="font-space-grotesk uppercase tracking-widest w-full bg-[#ffc900] text-black font-black py-3 px-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">Subscribe</button>\n</div>`
  }
];
