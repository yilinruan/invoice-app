import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create some users
  const user1 = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      password: 'password123',
      name: 'Alice',
      invoices: {
        create: [
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
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      password: 'password456',
      name: 'Bob',
      invoices: {
        create: [
          {
            vendor_name: 'Vendor C',
            amount: 180.75,
            due_date: new Date('2024-12-01'),
            description: 'IT services',
            paid: false,
          },
        ],
      },
    },
  });

  console.log({ user1, user2 });
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
