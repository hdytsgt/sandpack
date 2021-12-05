import { SandpackCodeEditor, SandpackPreview } from "..";
import { SandpackProvider, SandpackLayout, SandpackThemeProvider } from "../..";

import { SandpackConsole } from "./";

export default {
  title: "components/Console",
};

export const ReactDevTool: React.FC = () => (
  <SandpackProvider
    template="react"
    customSetup={{
      files: {
        "/App.js": `export default function App() {
  
    return <h1 onClick={()=>console.log("foo")}>Hello World</h1>
  }
  `,
      },
    }}
  >
    <SandpackLayout theme="sandpack-dark">
      <SandpackCodeEditor />
      <SandpackPreview />
    </SandpackLayout>

    <SandpackLayout theme="sandpack-dark">
      <SandpackConsole />
    </SandpackLayout>
  </SandpackProvider>
);
