import Airtable from "airtable";

Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.REACT_APP_AIRTABLE_KEY,
});
const react101 = Airtable.base("app7cGsAurL1rBzbi");

export async function getData(table = '', query = {}) {
    const postsTable = await react101(table);
    const postQuery = await postsTable.select(query);
    const rawRecords = await postQuery.all();
    return rawRecords;
}
