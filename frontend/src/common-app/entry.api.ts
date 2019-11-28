
interface Entry {
  id: string;
  cardNumber: string;
  entryTime: string;
  exitTime: string;
  name: string;
  lastName: string;
  dni: string;
  company: string;
  visits: string;
  signature: [];
}

// const type entryCollection = Entry[];

const urlEntries = 'http://localhost:3000/entries';

export const getEntryById = (id: string): Promise<Entry> => {
  return fetch(`${urlEntries}/${id}`)
          .then(response => response.json());
}


export const insertEntry = (entry: Entry): Promise<Entry> => {
  return fetch(urlEntries, {
                    method: 'post',
                    body: JSON.stringify(entry)
                  }).then(response => response.json());
}
