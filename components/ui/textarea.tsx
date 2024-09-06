import { useState } from "react";

function textarea() {
  const [value, setValue] = useState("");

  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type your message here..."
      className="border rounded-md p-2 w-full h-32"
    />
  );
}

export default textarea;
