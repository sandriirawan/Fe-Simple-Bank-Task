import { Model, createServer } from "miragejs";

export const useServer = () => {
  const setupMigrae = () => {
    createServer({
      models: {
        user: Model,
        transactions: Model,
      },

      routes() {
        this.namespace = "api";

        this.get("/users", (schema) => {
          return schema.users.all();
        });

        this.get("/users/1", (schema) => {
          return schema.users.find(1);
        });

        this.put("/users/1", (schema, request) => {
          const attrs = JSON.parse(request.requestBody);
          const user = schema.users.find(1);
          user.update(attrs);
          return user;
        });

        this.get("/balance", (schema) => {
          return schema.balance.all();
        });

        this.get("/transactions", (schema, request) => {
          const userId = parseInt(request.queryParams.userId);
          const transactions = schema.transactions.where({ users_id: userId });
          return transactions;
        });

        this.post("/transactions", (schema, request) => {
          const attrs = JSON.parse(request.requestBody);
          const newTransactionId = schema.transactions.all().models.length + 1;

          const newTransaction = {
            transaction_id: newTransactionId,
            users_id: 1,
            transaction: "Expenses",
            transaction_date: new Date(),
            ...attrs,
          };

          const transaction = schema.transactions.create(newTransaction);

          return transaction;
        });
      },
      seeds(server) {
        server.db.loadData({
          users: [
            {
              id: 1,
              name: "Lekan Okeowo",
              email: "lekan@example.com",
              card_number: "0918 8124 0042 8129",
              balance: 5000000,
              income: 5000000,
              expenses: 1000000,
              expenses_date: "2023-10-20",
            },
            {
              id: 2,
              name: "John Doe",
              email: "john@example.com",
              card_number: "6623 3213 1764 1234",
              balance: 10000000,
              income: 10000000,
              expenses: 2000000,
              expenses_date: "2023-10-20",
            },
            {
              id: 3,
              name: "Jane Smith",
              email: "jane@example.com",
              card_number: "4445 562 2353 4321",
              balance: 2000000,
              income: 2000000,
              expenses: 500000,
              expenses_date: "2023-10-20",
            },
            {
              id: 4,
              name: "Jane Smith",
              email: "jane@example.com",
              card_number: "4445 562 2353 4321",
              balance: 6000000,
              income: 6000000,
              expenses: 3000000,
              expenses_date: "2023-10-20",
            },
          ],
          transactions: [
            {
              transaction_id: 1,
              users_id: 1,
              customer_name: "Alice Johnson",
              customer_email: "alice@example.com",
              transaction: "Expenses",
              transaction_amount: 5000,
              transaction_date: "2023-10-01",
              transaction_description: "Initial Balance",
            },
            {
              transaction_id: 2,
              users_id: 2,
              customer_name: "Bob Smith",
              customer_email: "bob@example.com",
              transaction: "Expenses",
              transaction_amount: 7500,
              transaction_date: "2023-10-02",
              transaction_description: "First Deposit",
            },
            {
              transaction_id: 3,
              users_id: 1,
              customer_name: "Charlie Brown",
              customer_email: "charlie@example.com",
              transaction: "Expenses",
              transaction_amount: 1000,
              transaction_date: "2023-10-03",
              transaction_description: "Groceries",
            },
          ],
        });
      },
    });
  };

  return {
    setupMigrae,
  };
};
