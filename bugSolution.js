```javascript
// Correct usage of $inc and $setOnInsert to handle non-existent fields
db.collection('counters').updateOne({ _id: 'myCounter' }, {
  $setOnInsert: { sequence_value: 0 },
  $inc: { sequence_value: -1 }
});
```