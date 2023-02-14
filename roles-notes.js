[{"content":"## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.","type":"text","id":"12frm"},{"content":"import React, { useState } from 'react';\nimport { render, screen } from '@testing-library/react';\nimport user from '@testing-library/user-event';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount((c) => c + 1)}>\n    Count: {count}\n  </button>\n};\nrender(<Counter />);","type":"code","id":"az9bh"},{"content":"test('it shows a button', () => {\n  render(<Counter />);\n\n  const button = screen.getByRole('button');\n\n  expect(\n    button\n  ).toBeInTheDocument();\n});\n","type":"code","id":"ngyzj"},{"content":"test('it doesnt show an input', () => {\n  render(<Counter />);\n\n  const input = screen.queryByRole('textbox');\n  \n  expect(\n    input\n  ).not.toBeInTheDocument();\n});\n","type":"code","id":"hgs1s"},{"content":"import { render, screen } from '@testing-library/react';\nimport user from '@testing-library/user-event';\n\nfunction RoleExample() {\n  return (\n    <div>\n      <a href=\"/\">Link</a>\n      <button>button</button>\n      <footer>contentinfo</footer>\n      <h1>heading</h1>\n      <header>banner</header>\n      <img alt=\"description\" /> img\n      <input type=\"checkbox\" /> checkbox\n      <input type=\"number\" /> spinbutton\n      <input type=\"radio\" /> radio\n      <input type=\"text\" /> textbox\n      <li>listItem</li>\n      <ul>listgroup</ul>\n    </div>\n  )\n}\n\nrender(<RoleExample />)","type":"code","id":"vur7z"},{"content":"test(\"can find element by role\", () => {\n  render(<RoleExample />)\n\n  const roles = [\n    'link', 'button', 'contentinfo', 'heading', 'banner', 'img', 'checkbox',\n    'spinbutton', 'radio', 'textbox', 'listitem', 'list'\n  ]\n\n  for (let role of roles) {\n    const el = screen.getByRole(role)\n\n    expect(el).toBeInTheDocument()\n  }\n})","type":"code","id":"pt39q"},{"content":"function AccessibleName() {\n  return (\n    <div>\n      <input />\n      <button>Submit</button>\n      <button>Cancel</button>\n    </div>\n  )\n}\n\nrender(<AccessibleName />)","type":"code","id":"o2nel"},{"content":"test(\"can select by accessible name\", () => {\n  render(<AccessibleName />)\n\n  const submitButton = screen.getByRole('button', {\n    name: /submit/i\n  })\n\n  const cancelButton = screen.getByRole('button', {\n    name: /cancel/i\n  })\n\n  expect(submitButton).toBeInTheDocument()\n  expect(cancelButton).toBeInTheDocument()\n})","type":"code","id":"z9f4o"},{"content":"function MoreNames() {\n  return (\n    <div>\n      <label htmlFor=\"email\">Email</label>\n      <input id=\"email\"/>\n      \n      <label htmlFor=\"search\">Search</label>\n      <input id=\"search\"/>\n    </div>\n  )\n}\n\nrender(<MoreNames />)","type":"code","id":"gfttb"},{"content":"test('show and email & search text input', () => {\n  render(<MoreNames />)\n\n  const emailInput = screen.getByRole('textbox', {name: /email/i})\n  const searchInput = screen.getByRole('textbox', {name: /search/i})\n\n  expect(emailInput).toBeInTheDocument()\n  expect(searchInput).toBeInTheDocument()\n})","type":"code","id":"k4h9z"},{"content":"function IconButtons() {\n  return (\n    <div>\n      <button aria-label=\"sign in\">\n      <svg />\n      </button>\n\n      <button aria-label=\"sign out\">\n      <svg />\n      </button>\n    </div>\n  )\n}\n\nrender(<IconButtons />)","type":"code","id":"eqjqf"},{"content":"test('find element based on label', () => {\n  render(<IconButtons />)\n\n  const signInButton = screen.getByRole('button', {name: /sign in/i})\n  const signOutButton = screen.getByRole('button', {name: /sign out/i})\n\n  expect(signInButton).toBeInTheDocument()\n  expect(signOutButton).toBeInTheDocument()\n})","type":"code","id":"6vd3y"}]