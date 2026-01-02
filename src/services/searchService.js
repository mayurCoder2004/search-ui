const dummyData = [
  {
    id: 1,
    title: "Vue.js Basics",
    snippet: "Learn the fundamentals of Vue.js",
    description:
      "This article covers Vue components, reactivity, directives, and lifecycle hooks.",
    category: "Frontend",
    date: "2024-01-10"
  },
  {
    id: 2,
    title: "Advanced Vue Patterns",
    snippet: "Improve scalability in Vue apps",
    description:
      "Learn advanced patterns like composables, state management, and performance optimization.",
    category: "Frontend",
    date: "2024-02-05"
  },
  {
    id: 3,
    title: "JavaScript Async Guide",
    snippet: "Master async/await and promises",
    description:
      "Detailed explanation of asynchronous JavaScript with real-world examples.",
    category: "JavaScript",
    date: "2023-12-20"
  },
  {
    id: 4,
    title: "Understanding Vue Reactivity",
    snippet: "How Vue tracks changes efficiently",
    description:
      "An in-depth look at Vue’s reactivity system, refs, reactive objects, and dependency tracking.",
    category: "Frontend",
    date: "2024-03-01"
  },
  {
    id: 5,
    title: "Vue Composition API Explained",
    snippet: "A practical guide to the Composition API",
    description:
      "This guide explains setup(), refs, computed properties, and best practices for Composition API.",
    category: "Frontend",
    date: "2024-03-12"
  },
  {
    id: 6,
    title: "State Management in Vue",
    snippet: "When and how to manage state",
    description:
      "Learn when to use local state, props, emits, and global state solutions like Pinia.",
    category: "Frontend",
    date: "2024-02-18"
  },
  {
    id: 7,
    title: "Debouncing and Throttling in JavaScript",
    snippet: "Optimize performance for user input",
    description:
      "This article explains debouncing and throttling techniques with real-world UI examples.",
    category: "JavaScript",
    date: "2024-01-25"
  },
  {
    id: 8,
    title: "Frontend Performance Optimization",
    snippet: "Make your web apps faster",
    description:
      "Learn lazy loading, code splitting, memoization, and rendering optimizations.",
    category: "Performance",
    date: "2024-02-28"
  },
  {
    id: 9,
    title: "Accessibility in Modern Web Apps",
    snippet: "Build inclusive user interfaces",
    description:
      "A guide to ARIA roles, keyboard navigation, screen readers, and accessible UI patterns.",
    category: "Accessibility",
    date: "2024-03-05"
  },
  {
    id: 10,
    title: "System Design Basics for Frontend",
    snippet: "Design scalable frontend applications",
    description:
      "Covers component architecture, state flow, API handling, and frontend scalability principles.",
    category: "System Design",
    date: "2024-03-15"
  }
]


export function fetchSearchResults(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) {
        resolve([])
        return
      }

      const filteredResults = dummyData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )

      resolve(filteredResults)
    }, 800) // simulate 800ms network delay
  })
}
