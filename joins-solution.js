//1.Get all customers and their addresses.
SELECT * From customers
INNER JOIN addresses
ON customers.id = addresses.customer_id;
//2.Get all orders and their line items.
// 5.Get the number of orders for each customer.
//N0TE: It is OK if those without orders are not included in results.
