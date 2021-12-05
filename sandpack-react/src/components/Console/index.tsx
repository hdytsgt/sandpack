import { useClasser } from "@code-hike/classer";
import React, { useEffect, useState } from "react";

import { useSandpack } from "../../hooks/useSandpack";

export const SandpackConsole: React.FC<{ clientId?: string }> = ({
  clientId,
}) => {
  const { listen, sandpack } = useSandpack();
  const [logs, setLogs] = useState([]);

  const c = useClasser("sp");

  useEffect(() => {
    const unsubscribe = listen((msg) => {
      console.log(msg);
      if (msg.type === "console") {
        setLogs((prev) => [...prev, msg]);
      } else if (msg.type === "start") {
        setLogs([]);
      }
    });

    return unsubscribe;
  }, [listen]);

  return (
    <div className={c("devtools")}>
      {logs.map(({ log, $id }) => {
        return <p key={$id}>{log[0].data}</p>;
      })}
    </div>
  );
};
