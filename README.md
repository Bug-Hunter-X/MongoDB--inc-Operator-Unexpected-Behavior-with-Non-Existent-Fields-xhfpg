# MongoDB $inc Operator Unexpected Behavior with Non-Existent Fields

This example demonstrates unexpected behavior when using the `$inc` operator in MongoDB to decrement a counter field that doesn't yet exist.  The `$inc` operator will silently fail to create the field if it does not exist when given a negative value.

**Problem:**

The code attempts to decrement a counter field using `$inc: { sequence_value: -1 }`. If `sequence_value` doesn't exist, the operation will fail without error, leaving the field undefined. This is often unexpected behavior. 

**Solution:**

To reliably decrement a counter while handling non-existent fields use the `$setOnInsert` operator in conjunction with `$inc`. This ensures that if the field does not exist, it's created with an initial value (e.g., 0) before decrementing. 

See `bugSolution.js` for the corrected implementation.