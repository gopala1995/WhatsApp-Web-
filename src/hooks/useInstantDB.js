import { useCallback } from "react";
import { init } from "@instantdb/react";

const useInstantDB = () => {
  const apiKey = "4541835b-449f-4cd4-8243-810ce1d803bb";

  const getContacts = useCallback(async () => {
    // Replace with InstantDB API call
    const db = init({
      appId: process.env.API_KEY,
    });
    const query = { goals: {} };
    const { isLoading, error, data } = db.useQuery(query);

    const response = await fetch("https://api.instantdb.com/contacts", {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    return response.ok ? await response.json() : [];
  }, []);

  const sendMessage = useCallback(async (contactId, message) => {
    // Replace with InstantDB API call

    await fetch(`https://api.instantdb.com/messages/${contactId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    // const db = init({
    //     appId: "4541835b-449f-4cd4-8243-810ce1d803bb",
    //   });

    //   // transact! 🔥
    //   db.transact(db.tx.goals[id()].update({ message: 'eat' }));
  }, []);

  return { getContacts, sendMessage };
};

export default useInstantDB;
