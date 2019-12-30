import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables
} from "relay-runtime";

const fetchQuery = async (
  operation: { text?: string | null },
  variables: Variables
) => {
  try {
    const response = await fetch(
      process.env.NODE_ENV !== "production"
        ? "http://localhost:4000/graphql"
        : "",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: operation.text,
          variables
        })
      }
    );

    return response.json();
  } catch (e) {
    console.warn("RELAY ERROR", e);
    return {};
  }
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
