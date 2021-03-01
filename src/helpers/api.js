import Airtable from "airtable";
import { useState, useEffect } from "react";

Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.REACT_APP_AIRTABLE_KEY,
});
const react101 = Airtable.base(process.env.REACT_APP_AIRTABLE_BASEKEY);

export async function getData(table = '', query = {}) {
    const postsTable = await react101(table);
    const postQuery = await postsTable.select(query);
    const rawRecords = await postQuery.all();
    return rawRecords;
}

export async function getDataById(table = '', id = '') {
    const postsTable = await react101(table);
    const myRecord = postsTable.find(id, function(err, record){
         return record;
    });
    return myRecord;
}

export function usePostById(table = 'posts', id = '') {
    const [_record, _setRecord] = useState({
        id: null,
        fields: []
    });

    const getRecordById = async (id) => {
        const postsTable = await react101(table);
        const post = await postsTable.find(id);
        return {
            id: post.id,
            fields: post.fields
        };
    };

    const data = getRecordById(id);

    useEffect(() => {
        data.then(result => {
            _setRecord(result);
        });
    }, []);

    return _record;
}
