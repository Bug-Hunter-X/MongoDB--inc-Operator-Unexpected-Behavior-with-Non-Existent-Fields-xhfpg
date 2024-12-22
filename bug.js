```javascript
//Incorrect usage of $inc operator
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { sequence_value: -1 } });
```