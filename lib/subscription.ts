import { prisma } from './prisma';

export async function checkSubscription(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { company: { include: { subscription: true } } }
  });
  if (!user || !user.company) throw new Error("Company not found");
  const sub = user.company.subscription;
  if (!sub || sub.status !== 'active' || sub.expiresAt < new Date()) throw new Error("Subscription expired or locked");
  if (sub.credit < 1) throw new Error("Insufficient credits");
  return sub;
}

export async function consumeCredit(companyId: string) {
  await prisma.subscription.update({
    where: { companyId },
    data: { credit: { decrement: 1 } }
  });
}