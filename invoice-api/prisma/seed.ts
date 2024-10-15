import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Define the users to seed
  const usersToSeed = [
    {
      email: 'alice@example.com',
      password: 'password123',
      name: 'Alice',
      invoices: [
        {
          vendor_name: 'Vendor A',
          amount: 100.50,
          due_date: new Date('2024-11-01'),
          description: 'Office supplies',
          paid: false,
        },
        {
          vendor_name: 'Vendor B',
          amount: 250.00,
          due_date: new Date('2024-11-15'),
          description: 'Marketing services',
          paid: true,
        },
      ],
    },
    {
      email: 'bob@example.com',
      password: 'password456',
      name: 'Bob',
      invoices: [
        {
          vendor_name: 'Vendor C',
          amount: 180.75,
          due_date: new Date('2024-12-01'),
          description: 'IT services',
          paid: false,
        },
      ],
    },
  ];

  for (const userData of usersToSeed) {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (!existingUser) {
      // User does not exist, create it
      const newUser = await prisma.user.create({
        data: {
          email: userData.email,
          password: userData.password,
          name: userData.name,
          invoices: {
            create: userData.invoices,
          },
        },
      });
      console.log(`Created user: ${newUser.name}`);
    } else {
      console.log(`User with email ${userData.email} already exists, skipping creation.`);

      // Optionally, check for invoices if you want to create them only if they don't exist
      for (const invoice of userData.invoices) {
        const existingInvoice = await prisma.invoice.findFirst({
          where: {
            description: invoice.description,
            user_id: existingUser.id, // Assuming you have access to the existing user's ID
          },
        });

        if (!existingInvoice) {
          // Invoice does not exist, create it
          await prisma.invoice.create({
            data: {
              vendor_name: invoice.vendor_name,
              amount: invoice.amount,
              due_date: invoice.due_date,
              description: invoice.description,
              paid: invoice.paid,
              user_id: existingUser.id, // Associate the invoice with the existing user
            },
          });
          console.log(`Created invoice: ${invoice.description} for user ${existingUser.name}`);
        } else {
          console.log(`Invoice with description '${invoice.description}' already exists for user ${existingUser.name}, skipping creation.`);
        }
      }
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
