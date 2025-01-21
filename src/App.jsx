import { useState } from "react";
import QuillEditor from "./QuillEditor";
const htmlToJson = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return convertElementToJSON(doc.body);
};

const convertElementToJSON = (element) => {
  let jsonContent = [];

  // Handle all child elements of the current element
  element.childNodes.forEach((child) => {
    if (child.nodeType === Node.ELEMENT_NODE) {
      const childJSON = {
        type: child.nodeName.toLowerCase(),
        content: child.innerHTML || child.textContent,
        class: child.className || '',
      };
      jsonContent.push(childJSON);
    }
  });

  return jsonContent;
};


function App() {
  const [editorValue, setEditorValue] = useState("");
  const [jsonContent, setJsonContent] = useState([]);

  const handleChange = (value) => {
    setEditorValue(value);
    console.log(value);  // Log the HTML content to the console

    // Convert the HTML to the JSON format
    const json = htmlToJson(value);
    setJsonContent(json); // Store the resulting JSON
    console.log(json); // Log the JSON to the console
  };

  return (
    <div className="app-container">
      <h1>React Blog Editor</h1>
      <QuillEditor
        id="editor"
        value={editorValue}
        onChange={handleChange}
      />
      <pre>{JSON.stringify(jsonContent, null, 2)}</pre> {/* Display the JSON */}
    </div>
  );
}

export default App;
