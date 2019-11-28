# Backend

## Available entry points:

* List All:   GET - http://localhost:3000/api/entries
* Get by Id:  GET - http://localhost:3000/api/entries/{id}
* Create:     POST - http://localhost:3000/api/entries  (json entity in request body)
* Modify:     PUT - http://localhost:3000/api/entries/{id}  (json entity in request body)
* Delete:     DELETE - http://localhost:3000/api/entries/{id}

## Entity contract

```typescript
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
```

```json
    {
      "id": "2",
      "cardNumber": "7679",
      "entryTime": "19/11/2019 07:55",
      "exitTime": "19/11/2019 18:06",
      "name": "John",
      "lastName": "Doe",
      "dni": "12345678X",
      "company": "LemonCode",
      "visits": "Alex",
      "signature": [[{"x":100,"y":133.36249923706055,"time":1574947043324,"color":"black"}, ...}
```
